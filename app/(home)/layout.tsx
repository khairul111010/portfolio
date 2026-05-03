import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Engineer Portfolio — Khairul Hasan",
  description:
    "Crafting high-performance digital experiences at the intersection of design systems, motion engineering, and creative code.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
