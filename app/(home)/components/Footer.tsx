import LogoIcon from "@/app/assets/icons/LogoIcon";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: "300",
  subsets: ["latin"],
});
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`h-20 ${jetBrains.className} text-[10px] leading-none border-t border-[#303030] uppercase text-[#a1a1a1] bg-[#101010] py-5 flex flex-none flex-col flex-nowrap items-center justify-center gap-2 h-20 w-full overflow-visible p-5 relative z-9`}
    >
      <div className="max-w-[1240px] px-5 flex items-center justify-between w-full">
        <div className="w-[300px]">
          © Khairul Hasan {currentYear}. All rights reserved.
        </div>
        <LogoIcon variant="dark" />
        <div className="w-[300px] flex items-center justify-between">
          <div className="relative group">
            <Link
              href={"https://www.linkedin.com/in/imkhairulhasan"}
              className="absolute h-12 w-12 -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-14 bg-[#0A66C2] p-4 rounded-full transition-all duration-200 ease-in-out flex items-center justify-center"
            >
              <ImLinkedin2 size={30} className="text-white" />
            </Link>
            <div className="cursor-pointer">Linkedin</div>
          </div>
          <div className="relative group">
            <Link
              href={"mailto:khairul.hasan.dev@gmail.com"}
              className="absolute h-12 w-12 -top-12 -left-[10px] opacity-0 group-hover:opacity-100 group-hover:-top-14 bg-[#C03828] p-4 rounded-full transition-all duration-200 ease-in-out flex items-center justify-center"
            >
              <BiLogoGmail size={30} className="text-white" />
            </Link>
            <div className="cursor-pointer">Gmail</div>
          </div>
          <div className="relative group">
            <Link
              href={"https://x.com/iamkhairulhasan"}
              className="absolute h-12 w-12 -top-12 -left-[22px] opacity-0 group-hover:opacity-100 group-hover:-top-14 bg-black p-4 rounded-full transition-all duration-200 ease-in-out flex items-center justify-center"
            >
              <FaXTwitter size={30} className="text-white" />
            </Link>
            <div className="cursor-pointer">X</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
