import LinkedInIcon from "@/app/components/icons/LinkedInIcon";

const Topcard = () => {
  return (
    <div className="max-w-[720px] m-auto mt-16 text-black dark:text-white">
      <section className="col-span-3 bg-white dark:bg-[#1B1F23] overflow-hidden rounded-md relative shadow-md">
        <img src={"/cover.svg"} alt="cover" className="w-full" />
        <img
          src={"/dp.webp"}
          alt="Profile Picture"
          className="h-36 w-36 object-contain rounded-full border-2 border-white dark:border-[#1B1F23] absolute -translate-y-2/4 translate-x-4"
        />
        <a
          href="https://www.linkedin.com/in/imkhairulhasan"
          className="absolute right-10 mt-4 bg-[#ff0000] gap-2 flex items-center text-white p-2 rounded-md text-sm font-bold"
        >
          <div className="h-3 w-3">
            <LinkedInIcon />
          </div>
        </a>
        <div className="flex items-start justify-between mt-[70px] p-4">
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-medium dark:text-white text-black">
                Khairul Hasan
              </h1>
              <img src={"/verified.svg"} alt="verified" className="w-6 h-6" />
            </div>
            <p className="dark:text-gray-300 text-slate-600 text-sm">
              Frontend Engineer (4 yrs +) - React, Redux, Next, JavaScript,
              TypeScript, Nodejs
            </p>
            <p className="dark:text-gray-300 text-slate-600 text-xs">
              Dhaka, Bangladesh
            </p>
            <div className="flex items-center gap-1 text-sm">
              <div>Available</div>
              <a
                className=" underline text-[#FF0000]"
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZkUNVV7hOmpvJEvdsTqzvrYTAWbS_-d1k4HqKaLqFln_PSI6XR_GEI9c2-yjuVMx2L85OwQ2x?gv=true"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Topcard;
