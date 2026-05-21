export default function Home() {
  const faqItems = [
    {
      question: "Oferiți tractări auto non-stop în Dej și Cluj?",
      answer:
        "Da. Oferim servicii de tractare auto și asistență rutieră în Dej, județul Cluj. Tractăm autoturisme, dube, microbuze și utilaje agricole pe platformă, cu intervenție rapidă în Dej, Gherla, Beclean, Bistrița, Sălaj și Maramureș.",
    },
    {
      question: "Asigurați transport auto intern și internațional?",
      answer:
        "Da. Asigurăm transport pe platformă în toată România și în Europa pentru mașini defecte, mașini implicate în accidente, autoturisme noi neînmatriculate pentru ITP și RAR, precum și alte tipuri de transport auto la cerere.",
    },
    {
      question: "În ce zone interveniți pentru tractări auto?",
      answer:
        "Intervenim pentru tractări auto în Dej, Cluj, Gherla, Beclean, Bistrița-Năsăud, Sălaj și Maramureș. La nevoie, putem asigura și transport auto pe platformă în alte zone din țară sau internațional.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tractaridej.com/#business",
    name: "CHC AUTO GARAJE SRL",
    alternateName: "CHC AUTO GARAGE SRL",
    description:
      "Tractări auto și transport pe platformă în Dej, Cluj, Bistrița, Sălaj și Maramureș. Transport auto intern și internațional. Disponibili NON-STOP 24/7.",
    url: "https://tractaridej.com",
    image: "https://tractaridej.com/START_SITE.jpeg",
    logo: "https://tractaridej.com/logo-chc.svg",
    telephone: "+40767121351",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Florilor 44",
      addressLocality: "Dej",
      addressRegion: "Cluj",
      postalCode: "405200",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.1332",
      longitude: "23.8753",
    },
    areaServed: ["Dej", "Cluj", "Gherla", "Beclean", "Bistrița-Năsăud", "Sălaj", "Maramureș"],
    serviceType: [
      "Tractări auto",
      "Transport auto platforma",
      "Asistență rutieră",
      "Transport internațional",
    ],
    hasMap: "https://maps.google.com/?q=Str+Florilor+44+Dej+Cluj",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40767121351",
      contactType: "customer service",
      availableLanguage: ["Romanian"],
    },
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative w-screen h-screen flex flex-col items-center justify-center text-center overflow-x-hidden overflow-y-auto px-5">
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
      <div className="relative z-10 flex flex-col items-center" style={{ paddingBottom: "80px" }}>
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
            AUTO GARAGE SRL
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontSize: "clamp(0.8rem,2.5vw,0.95rem)",
              fontWeight: 500,
            }}
          >
            Tractări Auto
          </span>
          <span style={{ color: "#F5C518", opacity: 0.6 }}>•</span>
          <span
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontSize: "clamp(0.8rem,2.5vw,0.95rem)",
              fontWeight: 500,
            }}
          >
            Transport Auto
          </span>
          <span style={{ color: "#F5C518", opacity: 0.6 }}>•</span>
          <span
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontSize: "clamp(0.8rem,2.5vw,0.95rem)",
              fontWeight: 500,
            }}
          >
            Transport Marfă România & UE
          </span>
          <span style={{ color: "#F5C518", opacity: 0.6 }}>•</span>
          <span
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontSize: "clamp(0.8rem,2.5vw,0.95rem)",
              fontWeight: 500,
            }}
          >
            Asistență Rutieră 24/7
          </span>
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
      </div>
      <section className="relative z-10 mt-10 w-full max-w-3xl">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.24em] text-[#8f8f8f]">
          Intrebari frecvente
        </p>
        <div className="flex flex-col gap-3">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="overflow-hidden border border-yellow-400/15 bg-black/30 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm"
            >
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold uppercase tracking-wide text-white marker:text-yellow-400">
                {faq.question}
              </summary>
              <p className="border-t border-white/5 px-5 py-4 text-sm leading-6 text-gray-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          marginTop: "24px",
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
          position: "relative",
          width: "100%",
          padding: "16px 24px",
          borderTop: "1px solid rgba(245,197,24,0.15)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px 16px",
          marginTop: "24px",
        }}
      >
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          CHC AUTO GARAGE SRL
        </span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
          Str. Florilor 44, Dej, Jud. Cluj
        </span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>CUI: 36865232</span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>J12/4447/2016</span>
        <span style={{ color: "#333", fontSize: "0.7rem" }}>|</span>
        <span style={{ color: "#444", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} CHC AUTO GARAGE SRL. Toate drepturile rezervate.
        </span>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}
