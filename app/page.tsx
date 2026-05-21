import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHC AUTO GARAJE SRL - Tractari Dej",
  description: "Tractari si transport auto intern si international. Disponibili 24/7.",
};

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex flex-col items-center justify-center text-center overflow-hidden px-5">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/START_SITE.jpeg')",
          filter: "brightness(0.28) saturate(0.7)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 to-black/85" />
      <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-yellow-400 opacity-40 z-10" />
      <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-yellow-400 opacity-40 z-10" />
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/logo-chc.svg"
          alt="CHC AUTO GARAJE SRL"
          style={{ width: "min(500px, 85vw)", marginBottom: "24px" }}
        />
        <h1 className="font-black uppercase text-white leading-none text-5xl sm:text-7xl md:text-8xl">
          CHC AUTO<br />
          <span className="text-yellow-400">GARAJE</span> SRL
        </h1>
        <p className="text-white uppercase tracking-wide text-sm font-medium mt-4">
          Servicii de tractare - disponibili 24/7
        </p>
        <div className="flex items-center gap-3 mt-5 flex-wrap justify-center">
          <span className="text-white uppercase tracking-wide text-sm font-medium">Transport intern</span>
          <span className="text-yellow-400 opacity-60">|</span>
          <span className="text-white uppercase tracking-wide text-sm font-medium">Transport international</span>
        </div>
        <div className="w-14 h-0.5 bg-yellow-400 my-7" />
        <p className="text-gray-500 uppercase tracking-widest text-xs mb-3">Suna acum</p>
        <a
          href="tel:+40767121351"
          className="text-white font-bold text-4xl sm:text-5xl tracking-wide px-6 py-3 border border-yellow-400/30 rounded hover:bg-yellow-400 hover:text-black transition-all duration-200"
        >
          +40 767 121 351
        </a>
        <p className="text-gray-600 uppercase tracking-widest text-xs mt-7">
          Site in constructie
        </p>
      </div>
    </main>
  );
}
