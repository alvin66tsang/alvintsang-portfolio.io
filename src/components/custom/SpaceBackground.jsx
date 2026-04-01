import React, {useEffect, useRef} from "react";
import * as THREE from "three";

const createStarTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
};

const SpaceBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, stars, starGeo;
        const vertexCount = 6000;
        const mount = mountRef.current;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            20,
            window.innerWidth / window.innerHeight,
            1,
            1000,
        );
        camera.position.z = 2;
        camera.rotation.x = 2;

        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        starGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(vertexCount * 3);
        const velocities = new Float32Array(vertexCount);

        for (let i = 0; i < vertexCount; i++) {
            positions[i * 3] = Math.random() * 900 - 300;
            positions[i * 3 + 1] = Math.random() * 900 - 300;
            positions[i * 3 + 2] = Math.random() * 900 - 300;
            velocities[i] = 0;
        }

        starGeo.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );
        starGeo.setAttribute(
            "velocity",
            new THREE.BufferAttribute(velocities, 1),
        );

        const starTexture = createStarTexture();

        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1.5,
            map: starTexture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars);

        let frameId;
        const animate = () => {
            const positionAttribute = starGeo.getAttribute("position");

            const speed = 0.5;

            for (let i = 0; i < vertexCount; i++) {
                let y = positionAttribute.getY(i);

                y -= speed;

                if (y < -200) {
                    y = 200;
                }

                positionAttribute.setY(i, y);
            }

            positionAttribute.needsUpdate = true;
            stars.rotation.y += 0.0005;

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(frameId);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            starGeo.dispose();
            starMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 -z-10 bg-black/95 animate-in fade-in duration-1000"
            aria-hidden="true"
        />
    );
};

export default SpaceBackground;
