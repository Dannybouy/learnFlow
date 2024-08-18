import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from "@/assets/landing-page/Logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E] px-8 md:px-[120px] py-6 md:py-8 flex justify-between items-center">
      {/* Logo */}
      <img src={Logo} alt="logo" className="h-8 md:h-10" />

      {/* Navigation Links */}
      <ul className="hidden md:flex text-zinc-300 text-sm md:text-base font-medium list-none items-center gap-6 md:gap-8 font-dmsans">
        <li className="cursor-pointer hover:text-white transition-colors">About</li>
        <li className="cursor-pointer hover:text-white transition-colors">Features</li>
        <li className="cursor-pointer hover:text-white transition-colors">Pricing</li>
      </ul>

      {/* Button */}
      <NavLink to="/register">
        <Button
          variant="default"
          className="rounded-full border border-[#f7CA4E] bg-[#1E1E1E] text-[#f7CA4E] hover:bg-[#f7CA4E] hover:text-[#1E1E1E] font-dmsans text-sm md:text-base font-medium px-4 py-2 md:px-6 md:py-3 transition-colors"
        >
          Let's start your learning journey
        </Button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
