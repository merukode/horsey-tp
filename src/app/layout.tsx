import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import ParallaxBackground from "@/components/ParallaxBackground";
import { MusicProvider } from './context/MusicContext';
import SpinningDisc from './components/SpinningDisc';
import AnimatedCursor from "react-animated-cursor"

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
          <main className="pt-16 relative z-10">
            {children}
          </main>
          <audio id="global-audio-player" src="/music/valse.mp3" loop />
          <SpinningDisc />
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color="68, 54, 39"
            outerAlpha={0.2}
          />
        </MusicProvider>
      </body>
    </html>
  );
}
