import { getSiteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: ["Sumit Nayak", "M. Sumit Nayak", siteConfig.shortName],
    url: siteUrl,
    image: `${siteUrl}/Images/avatar.jpg`,
    email: siteConfig.email,
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belgaum",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsAbout: [
      "Flutter",
      "React Native",
      "React.js",
      "Next.js",
      "Python",
      "FastAPI",
      "WebSockets",
      "TypeScript",
      "JavaScript",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteUrl,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
