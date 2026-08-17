import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
