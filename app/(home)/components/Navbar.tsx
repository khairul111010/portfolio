import LogoIcon from "@/app/assets/icons/LogoIcon";
import { JetBrains_Mono } from "next/font/google";
import ButtonAnimated from "./ButtonAnimated";
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: "300",
  subsets: ["latin"],
});
const Navbar = () => {
  return (
    <header
      className={`sticky top-5 backdrop-blur-md flex items-center justify-between rounded-2xl border border-[#cecece] w-[960px] left-[calc(50%-960px/2)] z-10 px-5 py-7 ${jetBrains.className}`}
    >
      <div className="flex items-center gap-3 text-black">
        <LogoIcon variant="light" />
        <h4 className="">Khairul Hasan</h4>
      </div>
      <div className="flex items-center">
        <div className="flex items-center text-xs gap-7">
          <ButtonAnimated text="Service" />
          <div>|</div>
          <ButtonAnimated text="Offer" />
          <div>|</div>
          <ButtonAnimated text="Case Studies" />
          <div>|</div>
          <ButtonAnimated text="Testimonials" />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
