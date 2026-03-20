import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AskZambia — National AI Knowledge Platform",
  description:
    "Ask anything about Zambia. Get instant, verified answers about laws, government services, tourism, economy, culture, and more.",
  keywords: [
    "Zambia",
    "AI",
    "knowledge platform",
    "laws",
    "constitution",
    "government services",
    "tourism",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
