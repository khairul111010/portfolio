import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Developer | React.js Portfolio - Khairul Hasan",
  description:
    "Explore the portfolio of Khairul Hasan, a skilled frontend developer specializing in React.js. View projects, skills, and expertise in modern web development.",
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
      <body
        className={`${figtree.variable} antialiased bg-[#F4F2EE] dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
