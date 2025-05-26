import type { Metadata } from "next";
import "./globals.css";

// Update the import path below if Header and Footer are in separate files or a different directory
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Prof Site/Blog",
  description: "A Blog Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body className="min-h-screen bg-black flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
