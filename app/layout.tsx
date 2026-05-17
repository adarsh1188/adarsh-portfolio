import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Verma — Software Engineer",
  description:
    "Software Engineer specializing in scalable backend systems, MERN stack, and interactive web applications. ReactJS, NodeJS, NextJS expert.",
  keywords: [
    "Adarsh Verma",
    "Software Engineer",
    "MERN Stack",
    "Node.js",
    "React",
    "Next.js",
    "Backend Developer",
  ],
  authors: [{ name: "Adarsh Verma" }],
  openGraph: {
    title: "Adarsh Verma — Software Engineer",
    description:
      "Building scalable backend systems & interactive web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased bg-background text-white selection:bg-primary/40">
        {children}
      </body>
    </html>
  );
}
