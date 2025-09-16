import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "console.blog();",
  description: "Blog de uma desenvolvedora em formação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetBrains.variable} antialiased h-dvh flex flex-col overflow-hidden`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto pb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
