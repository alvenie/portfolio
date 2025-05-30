import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Alven's Portfolio",
  description: "Modern Next.js portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
