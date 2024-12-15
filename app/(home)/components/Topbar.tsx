import Image from "next/image";
import Link from "next/link";
import ThemeToggleComponent from "./_ThemeToggleComponent";

const Topbar = () => {
  return (
    <nav className="bg-[#1B1F23] p-2 fixed top-0 left-0 right-0">
      <section className="max-w-[1128px] m-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            height={36}
            width={36}
            alt="Khairul Hasan - logo"
            className="p-[6px] hover:bg-gray-700 rounded-md transition-all duration-150"
          />
        </Link>
        <ThemeToggleComponent />
      </section>
    </nav>
  );
};

export default Topbar;
