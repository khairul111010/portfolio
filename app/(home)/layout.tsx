import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ReactNode } from "react";
import { ScrollProvider } from "../lib/context/ScrollContext";
import { useSmoothScroll } from "../lib/hooks/useSmoothScroll";
import "./globals.css";

const latoSans = Lato({
  variable: "--font-lato",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Developer | React.js Portfolio - Khairul Hasan",
  description:
    "Explore the portfolio of Khairul Hasan, a skilled frontend developer specializing in React.js. View projects, skills, and expertise in modern web development.",
  icons: {
    icon: "/favicon.svg",
  },
};

function RootLayoutContent({ children }: { children: ReactNode }) {
  useSmoothScroll();

  return children;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoSans.variable} antialiased`}>
        <ScrollProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ScrollProvider>
      </body>
    </html>
  );
}
