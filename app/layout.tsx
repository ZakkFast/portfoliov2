import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/layout/Navigation";
import ThemeProvider from "./components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software engineer with 4+ years of professional experience building web applications, APIs, and backend systems with TypeScript, React, Node.js, Python, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zakkfast.io"),
  title: {
    default: "Zakk Fast | Software Engineer",
    template: "%s | Zakk Fast",
  },
  description,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
  ],
  authors: [{ name: "Zakk Fast", url: "https://zakkfast.io" }],
  creator: "Zakk Fast",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zakk Fast | Software Engineer",
    description,
    url: "https://zakkfast.io",
    siteName: "Zakk Fast",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakk Fast | Software Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-950 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
