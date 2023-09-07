import { useState } from "react";
import DesktopNav from "./DesktopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <section className="flex flex-row justify-between gap-10 items-center px-6 sm:px-20 py-6 border-b-2 border-stone-600 relative">
      <h1 id="title" className=" text-2xl sm:text-5xl font-black ">
        Poke App
      </h1>
      <div className="hidden sm:block">
        <DesktopNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <button
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="text-5xl transition-all duration-100  hover:text-stone-400 sm:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {showMobileNav && (
        <MobileNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      )}
    </section>
  );
};
export default Navbar;
