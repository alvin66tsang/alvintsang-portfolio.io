import SpaceBackground from "./components/custom/SpaceBackground";
import Hero from "./components/custom/Hero";
import MenuTool from "./components/custom/MenuTool";
import Projects from "./components/custom/Projects";
import Experiences from "./components/custom/Experiences";
import {ThemeProvider} from "./components/theme-provider";
import Skills from "./components/custom/Skills";
import Contact from "./components/custom/Contact";



function App() {
    
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="relative board w-full h-full">
                <SpaceBackground />
                <div className="relative z-10">
                    <MenuTool />
                    <Hero />
                    <Skills />
                    <Projects />
                    <Experiences />
                    <Contact />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
