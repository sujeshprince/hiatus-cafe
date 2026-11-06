import { siteConfig } from "@/config/site";
import { directionsHref, instagramHref, whatsappHref } from "@/lib/links";

export function JsonLd() {
  const instagram = instagramHref();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CafeOrCoffeeShop",
        "@id": `${siteConfig.siteUrl}/#cafe`,
        name: siteConfig.name,
        alternateName: siteConfig.hindiName,
        description: siteConfig.description,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phoneE164,
        priceRange: siteConfig.priceRange,
        image: `${siteConfig.siteUrl}/images/og-image.jpg`,
        servesCuisine: ["Coffee", "Cafe"],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line1,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Gorakhpur",
        },
        hasMap: directionsHref(),
        sameAs: instagram ? [instagram] : undefined,
        potentialAction: {
          "@type": "ReserveAction",
          name: "Request a table",
          target: {
            "@type": "EntryPoint",
            urlTemplate: whatsappHref(
              "Hello Hiatus Cafe! I'd like to request a table.",
            ),
            inLanguage: "en-IN",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": `${siteConfig.siteUrl}/#cafe` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
