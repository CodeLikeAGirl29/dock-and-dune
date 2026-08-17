import { Fraunces, Inter } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-sand text-ink antialiased">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
