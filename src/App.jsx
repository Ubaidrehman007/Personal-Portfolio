import ThreeBackground from "./components/three/ThreeBackground";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-zinc-100">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          {/* System Status */}
          <p className="font-mono text-sm text-cyan-400 mb-5 tracking-wider">
            SYSTEM INITIALIZING...
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
            Ubaid Rehman
          </h1>

          {/* Role */}
          <p className="mt-5 text-lg md:text-xl text-zinc-400">
            Full-Stack Java Engineer
          </p>
        </div>
      </section>
    </main>
  );
}
