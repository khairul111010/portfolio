import { JetBrains_Mono } from "next/font/google";
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: "300",
  subsets: ["latin"],
});
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`h-20 ${jetBrains.className} text-[10px] leading-none border-t border-[#303030] uppercase text-[#a1a1a1] bg-[#101010] py-5 flex items-center justify-center`}
    >
      <div className="max-w-[1240px] px-5 flex items-center justify-between">
        <div>© Khairul Hasan {currentYear}. All rights reserved.</div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
