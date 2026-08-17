import localFont from "next/font/local";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

// Self-hosted fonts — no network fetch at build time, so a flaky
// connection to fonts.gstatic.com can never fail the Vercel build.
//
// Drop the matching .woff2 files in app/fonts/ before deploying.
// Rename the files below to whatever you actually download, or keep
// these names and just save your downloads with these filenames.
const manrope = localFont({
  src: [
    { path: "./fonts/Manrope-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Manrope-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Manrope-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://dock-and-dune.vercel.app"),
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
    url: "https://dock-and-dune.vercel.app",
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
