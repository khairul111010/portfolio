"use client";

import { useState } from "react";
import Experience from "./Experience";
import Project from "./Project";
import Socials from "./Socials";

const Topcard = () => {
  const [tabs, setTabs] = useState<"experience" | "projects" | "links">(
    "experience"
  );

  return (
    <div className="max-w-[720px] m-auto mt-16 text-black dark:text-white">
      <section className="col-span-3 bg-white dark:bg-[#1B1F23] overflow-hidden rounded-md relative shadow-md">
        {/* Cover Image */}
        <img src={"/cover.webp"} alt="cover" className="w-full" />

        {/* Profile Image */}
        <img
          src={"/dp.webp"}
          alt="Profile Picture"
          className="h-36 w-36 object-contain rounded-full border-2 border-white dark:border-[#1B1F23] absolute -translate-y-2/4 translate-x-4"
        />

        {/* Profile Info */}
        <div className="flex items-center w-full justify-between mt-[70px] p-4">
          <div className="flex items-end w-full justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h1 className="text-2xl font-medium dark:text-white text-black">
                  Khairul Hasan
                </h1>
                <img src={"/verified.svg"} alt="verified" className="w-6 h-6" />
              </div>
              <p className="dark:text-gray-300 text-slate-600 text-sm">
                Sr. Frontend Engineer (5 yrs +) - React, Redux, Next,
                JavaScript, TypeScript, Nodejs
              </p>
              <p className="dark:text-gray-300 text-slate-600 text-xs">
                Dhaka, Bangladesh
              </p>

              {/* Availability */}
              <div className="flex items-center gap-1 text-sm mt-2">
                <div className="flex-shrink-0 relative">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <div>Available</div>
                <a
                  className="underline text-[#FF0000]"
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZkUNVV7hOmpvJEvdsTqzvrYTAWbS_-d1k4HqKaLqFln_PSI6XR_GEI9c2-yjuVMx2L85OwQ2x?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/Khairul_Hasan_resume.pdf"
              download
              className="mt-4 bg-[#ff0000] gap-2 flex items-center text-white p-2 rounded-md text-sm font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 text-center text-sm font-medium dark:border-gray-600">
          {["experience", "projects", "links"].map((tab) => (
            <div
              key={tab}
              role="button"
              tabIndex={0}
              aria-pressed={tabs === tab}
              onClick={() => setTabs(tab as typeof tabs)}
              className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-700 border-b-4 ${
                tabs === tab ? "border-red-500" : "border-transparent"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {tabs === "experience" ? (
          <Experience />
        ) : tabs === "projects" ? (
          <Project />
        ) : (
          <Socials />
        )}
      </section>

      {/* Footer */}
      <footer className="my-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Khairul Hasan. All rights reserved.
      </footer>
    </div>
  );
};

export default Topcard;
