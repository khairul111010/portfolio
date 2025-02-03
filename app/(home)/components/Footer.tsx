import LogoIcon from "@/app/assets/icons/LogoIcon";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import ButtonAnimated from "./ButtonAnimated";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: "300",
  subsets: ["latin"],
});

const Month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [dhakaTime, setDhakaTime] = useState<string>("");
  const [nycTime, setNycTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Dhaka Time (BST - UTC+6)
      const dhakaTimeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDhakaTime(
        new Intl.DateTimeFormat("en-US", dhakaTimeOptions).format(now)
      );

      // New York Time (EST/EDT - Dynamic)
      const nycTimeOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setNycTime(new Intl.DateTimeFormat("en-US", nycTimeOptions).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer
      className={`bg-[#101010] text-[#a1a1a1] ${jetBrains.className} text-[10px]`}
    >
      <div className={`h-[52px] flex items-center justify-between`}>
        <div className="grow shrink-0 basis-0"></div>
        <div className="grow-0 shrink-0 basis-auto w-[1080px] h-full border-x border-[#303030] flex items-center justify-between px-4">
          <div className="grow shrink-0 basis-0 ">Dhaka | {dhakaTime} BST</div>
          <div className="grow-0 shrink-0 basis-auto w-[450px] border-x h-full border-dashed border-[#303030] flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[12px] w-[12px] rounded-full bg-[#FF0000]"></div>
              <ButtonAnimated
                text={`Booking for ${Month[currentMonth]}`}
                style={{ lineHeight: "15px" }}
                className="h-[15px]"
                target="_blank"
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZkUNVV7hOmpvJEvdsTqzvrYTAWbS_-d1k4HqKaLqFln_PSI6XR_GEI9c2-yjuVMx2L85OwQ2x?gv=true"
              />
            </div>
          </div>
          <div className="grow shrink-0 basis-0 flex items-center justify-end">
            NYC | {nycTime} EST/EDT
          </div>
        </div>
        <div className="grow shrink-0 basis-0"></div>
      </div>
      <div
        className={`h-20 leading-none border-t border-[#303030] uppercase  py-5 flex flex-none flex-col flex-nowrap items-center justify-center gap-2 w-full overflow-visible p-5 relative z-9`}
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
      </div>
    </footer>
  );
};

export default Footer;
