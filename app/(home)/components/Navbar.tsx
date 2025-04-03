import LogoIcon from "@/app/assets/icons/LogoIcon";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import ButtonAnimated from "./ButtonAnimated";
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: "300",
  subsets: ["latin"],
});

const inter = Inter_Tight();

const Navbar = () => {
  return (
    <header
      className={`sticky top-5 bg-white backdrop-blur-md flex items-center justify-between rounded-2xl border border-gray-50 w-[960px] shadow-md left-[calc(50%-960px/2)] z-10 px-5 py-5 `}
    >
      <div className="flex items-center gap-3 text-black">
        <LogoIcon variant="light" />
        <h4
          className={`text-lg leading-tight line-clamp-none ${inter.className}`}
        >
          Khairul Hasan
        </h4>
      </div>
      <div className="flex items-center gap-7">
        <div className={`flex items-center ${jetBrains.className}`}>
          <div className="flex items-center text-xs gap-7">
            <ButtonAnimated text="Service" href="#service" />
            <div>|</div>
            <ButtonAnimated text="Offer" />
            <div>|</div>
            <ButtonAnimated text="Case Studies" />
            <div>|</div>
            <ButtonAnimated text="Testimonials" />
          </div>
        </div>
        <ButtonAnimated
          text="Let's Talk"
          className={`capitalize bg-black text-white text-xs rounded-full px-2 ${inter.className}`}
          height="30px"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZkUNVV7hOmpvJEvdsTqzvrYTAWbS_-d1k4HqKaLqFln_PSI6XR_GEI9c2-yjuVMx2L85OwQ2x?gv=true"
          target="_blank"
        />
      </div>
    </header>
  );
};

export default Navbar;
