import LogoIcon from "@/app/components/icons/LogoIcon";
import Link from "next/link";
import ThemeToggleComponent from "./_ThemeToggleComponent";

const Topbar = () => {
  return (
    <nav className="dark:bg-[#1B1F23] bg-[#FFFFFF] p-2 fixed top-0 left-0 right-0 z-50">
      <section className="max-w-[1128px] m-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="p-1 hover:bg-slate-100 dark:hover:bg-gray-600 rounded"
        >
          <LogoIcon />
        </Link>
        <ThemeToggleComponent />
      </section>
    </nav>
  );
};

export default Topbar;
