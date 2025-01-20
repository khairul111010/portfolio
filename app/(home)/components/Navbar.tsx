import LogoIcon from "@/app/assets/icons/LogoIcon";

const Navbar = () => {
  return (
    <header className="sticky top-5 backdrop-blur-md rounded-2xl w-[960px] left-[calc(50%-960px/2)] z-10 p-5">
      <div className="flex items-center gap-3 text-black">
        <LogoIcon variant="dark" />
        <h4>Khairul Hasan</h4>
      </div>
    </header>
  );
};

export default Navbar;
