import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { MusicProvider } from './context/MusicContext';
import SpinningDisc from './components/SpinningDisc';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] min-h-screen relative`}>
        <MusicProvider>
          <ParallaxBackground />
          <Navigation />
          <main className="pt-16 relative z-20">
            {children}
          </main>
          <audio id="global-audio-player" loop />
          <SpinningDisc />
        </MusicProvider>
      </body>
    </html>
  );
}
