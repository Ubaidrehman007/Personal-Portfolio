import ThreeBackground from "./components/three/ThreeBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Engineering from "./components/sections/Engineering";
import Architecture from "./components/sections/Architecture";
import Research from "./components/sections/Research";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05070b] text-zinc-100">
      {/* 3D Environment */}
      <ThreeBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Projects / Systems */}
      <Projects />

      {/* Engineering */}
      <Engineering />

      {/* Architecture */}
      <Architecture />

      {/* Research */}
      <Research />

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}
