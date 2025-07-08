import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const latoSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato-sans",
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
        className={`${latoSans.variable} antialiased bg-[#F4F2EE] dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
