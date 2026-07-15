import type { Metadata } from "next";
import { Manrope, Alex_Brush } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Elevate Studio Design",
  description:
    "Discover the art of interior design tailored to your unique style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${alexBrush.variable}`}
    >
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
