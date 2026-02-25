import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit Nayak",
  description: "React Native & Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} relative min-h-screen bg-[#1a1a28]`}>
        {/* Grainy texture overlay on body bg */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "161px",
            backgroundRepeat: "repeat",
            backgroundImage:
              "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
            opacity: 0.03,
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
