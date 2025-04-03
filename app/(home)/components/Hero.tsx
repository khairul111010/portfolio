import { Inter_Tight } from "next/font/google";
import ButtonAnimated from "./ButtonAnimated";

const inter = Inter_Tight();
const Hero = () => {
  return (
    <div className="h-screen bg-gray-50">
      <div className="w-[1020px] py-36 mx-auto justify-between flex items-center">
        <div>
          <ButtonAnimated
            text="⚡ I help Making technology work for your businesses"
            className="border rounded-full text-[10px] px-2 bg-white"
            height="25px"
          />
          <div
            className={`text-7xl font-bold uppercase line-clamp-none ${inter.className}`}
            style={{
              lineHeight: "77px",
              letterSpacing: "-1.9px",
            }}
          >
            <div>ship quicker,</div>
            <div>convert more,</div>
            <div>& unlock growth.</div>
          </div>
          <p className={`text-base ${inter.className}`}>
            Let's bring your idea up and running with tech
          </p>
          <ButtonAnimated
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZkUNVV7hOmpvJEvdsTqzvrYTAWbS_-d1k4HqKaLqFln_PSI6XR_GEI9c2-yjuVMx2L85OwQ2x?gv=true"
            text="Book a call"
            className="bg-black px-4 rounded-full text-white text-sm font-medium mt-6"
            height="44px"
          />
        </div>
        <div className="">
          <img
            src="/dp.jpeg"
            alt="Khairul Hasan (Senior Frontend Developer)"
            className="h-[280px] w-[280px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
