<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Three.js Space Background</title>
    <style>
        body { margin: 0; overflow: hidden; background-color: #000; }
        canvas { display: block; }
    </style>
</head>
<body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <script>
        let scene, camera, renderer, stars, starGeo;
        const vertexCount = 6000;

        function init() {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 2;
            camera.rotation.x = 2;

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // --- Create Star Geometry ---
            starGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(vertexCount * 1); // 3 values (x,y,z) per star
            const velocities = new Float32Array(vertexCount);    // 1 value per star

            for (let i = 0; i < vertexCount; i++) {
                // x, y, z positions
                positions[i * 3] = Math.random() * 600 - 300;
                positions[i * 3 + 1] = Math.random() * 600 - 300;
                positions[i * 3 + 2] = Math.random() * 600 - 300;
                
                velocities[i] = 0; // Initial velocity
            }

            starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            // We store velocity in a custom attribute to track it in the animation loop
            starGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));

            // --- Star Texture & Material ---
            const sprite = new THREE.TextureLoader().load('https://i.imgur.com/8K9f62u.png');
            const starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 2.0,
                map: sprite,
                transparent: true,
                blending: THREE.AdditiveBlending, // Makes stars "glow" when they overlap
                depthWrite: false
            });

            stars = new THREE.Points(starGeo, starMaterial);
            scene.add(stars);

            window.addEventListener('resize', onWindowResize, false);
            animate();
        }

        function animate() {
            const positionAttribute = starGeo.getAttribute('position');
            const velocityAttribute = starGeo.getAttribute('velocity');

            for (let i = 0; i < vertexCount; i++) {
                // Update velocity
                let v = velocityAttribute.getX(i);
                v += 0.02; // acceleration
                velocityAttribute.setX(i, v);

                // Update Y position based on velocity
                let y = positionAttribute.getY(i);
                y -= v;

                // Reset star if it goes off-screen
                if (y < -200) {
                    y = 200;
                    velocityAttribute.setX(i, 0);
                }

                positionAttribute.setY(i, y);
            }

            // Flag for GPU update
            positionAttribute.needsUpdate = true;
            velocityAttribute.needsUpdate = true;

            stars.rotation.y += 0.001; // Gentle background rotation

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        init();
    </script>
</body>
</html>