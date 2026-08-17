import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

// Fonts are self-hosted via @fontsource (actual .woff2 files ship inside
// the npm package itself) instead of next/font/google, which fetches
// from fonts.gstatic.com at build time. That build-time fetch has
// failed repeatedly on Vercel for this project — @fontsource removes
// the dependency entirely, since npm install is the only network
// access the build needs.

export const metadata = {
  metadataBase: new URL("https://dockanddune.lindseyhoward.dev"),
  title: "Dock & Dune | The Waterfront Ownership Guide",
  description:
    "Flood zones, dock permitting, wind mitigation, and the insurance math that catches buyers off guard on Okaloosa County's waterfront — from Lindsey Howard, eXp Realty.",
  keywords: [
    "waterfront real estate Okaloosa County",
    "Destin waterfront property",
    "Florida flood zone guide",
    "dock permitting Florida",
    "wind mitigation inspection",
  ],
  authors: [{ name: "Lindsey Howard" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dock & Dune | The Waterfront Ownership Guide",
    description:
      "What actually changes when a property touches the water — flood zones, permitting, and insurance, explained plainly.",
    url: "https://dockanddune.lindseyhoward.dev",
    siteName: "Dock & Dune",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dock & Dune | The Waterfront Ownership Guide",
    description:
      "What actually changes when a property touches the water — flood zones, permitting, and insurance, explained plainly.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-sand text-ink antialiased">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
