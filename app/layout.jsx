import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GTA 6 Price in India (2026): Game Price, PS5, Xbox & Total Cost | GameCost India",
    template: "%s | GameCost India"
  },
  description:
    "GTA 6 price in India, release date, PS5 and Xbox console prices. Calculate the total cost of playing GTA 6 in India and explore gaming accessories and buying guides.",
  applicationName: "GameCost India",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GameCost India",
    title: "GTA 6 Price in India (2026): Game Price, PS5, Xbox & Total Cost",
    description:
      "Find GTA 6 pricing in India, compare console costs and calculate your total gaming setup budget.",
    url: "/",
    images: [{
      url: "/images/vice-city-inspired-hero.webp",
      width: 1672,
      height: 941,
      alt: "Neon coastal cityscape created for the GTA 6 India fan guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/vice-city-inspired-hero.webp"],
    title: "GTA 6 Price in India (2026): Game Price, PS5, Xbox & Total Cost",
    description:
      "Find GTA 6 pricing in India, compare console costs and calculate your total gaming setup budget."
  }
};

export const viewport = {
  themeColor: "#080b18",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
