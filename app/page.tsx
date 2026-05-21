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
        <svg
          width="min(500px, 85vw)"
          viewBox="0 0 600 140"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: "24px", width: "min(500px, 85vw)" }}
        >
          <rect x="0" y="0" width="600" height="140" fill="#0d0d0d" />
          <polygon points="0,0 240,0 210,140 0,140" fill="#F5C518" />
          <text
            x="110"
            y="95"
            fontFamily="Arial Narrow, sans-serif"
            fontWeight="900"
            fontSize="86"
            fill="#0d0d0d"
            textAnchor="middle"
          >
            CHC
          </text>
          <text
            x="412"
            y="52"
            fontFamily="Arial Narrow, sans-serif"
            fontWeight="900"
            fontSize="30"
            fill="white"
            letterSpacing="2"
            textAnchor="middle"
          >
            AUTO GARAJE SRL
          </text>
          <rect x="235" y="64" width="350" height="1.5" fill="#F5C518" opacity="0.5" />
          <text
            x="412"
            y="94"
            fontFamily="Arial Narrow, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#F5C518"
            letterSpacing="4"
            textAnchor="middle"
          >
            TRACTARI • TRANSPORT AUTO • DEJ
          </text>
        </svg>
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
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "8px",
          }}
        >
          <a
            href="tel:+40767121351"
            style={{
              color: "#0d0d0d",
              background: "#F5C518",
              fontSize: "clamp(1.2rem,4vw,2rem)",
              fontWeight: 900,
              textDecoration: "none",
              padding: "16px 36px",
              letterSpacing: "0.04em",
              clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
            }}
          >
            📞 +40 767 121 351
          </a>
        </div>
        <p className="text-gray-600 uppercase tracking-widest text-xs mt-7">
          Site in constructie
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "64px",
          left: 0,
          right: 0,
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#444",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Parteneri
        </p>
        <a
          href="https://alphacont.ro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          <img
            src="/alphacont-logo.svg"
            alt="Alphacont"
            style={{ height: "32px", filter: "brightness(0) invert(1)" }}
          />
        </a>
      </div>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 24px",
          borderTop: "1px solid rgba(245,197,24,0.15)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px 24px",
        }}
      >
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          CHC AUTO GARAJE SRL
        </span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
          Str. Florilor 44, Dej, Jud. Cluj
        </span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>CUI: 36865232</span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>J12/4447/2016</span>
      </footer>
    </main>
  );
}
