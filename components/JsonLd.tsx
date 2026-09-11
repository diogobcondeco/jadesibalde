export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Jade Sibalde",
    description: "Advocacia & Consultoria",
    url: "https://jadesibalde.com",
    logo: "https://jadesibalde.com/logo_white.png",
    areaServed: [
      {
        "@type": "Country",
        name: "Brasil",
      },
      {
        "@type": "Country",
        name: "Portugal",
      },
    ],
    sameAs: [
      "https://www.instagram.com/jadesibalde.adv/",
      "https://www.youtube.com/@direitoporjade",
      "https://www.linkedin.com/in/jadesibalde/",
      "https://direitoporjade.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
