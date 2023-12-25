import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const dropRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setShowMobileNav(false);
    }
  };

  return (
    <nav className="relative">
      <div className="hidden sm:block">
        <a
          href="https://github.com/DavidMessmore"
          target="_blank"
          className="transition hover:text-stone-400 text-3xl mr-6"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <button
          onClick={toggleDarkMode}
          className="transition hover:text-stone-400 text-3xl"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
      <div className="block sm:hidden" ref={dropRef}>
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="text-3xl transition-all duration-100 hover:text-stone-400"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {showMobileNav && (
          <div className="absolute z-10 top-10 right-0 bg-white dark:bg-dark border-4 border-stone-400 rounded-lg w-32 text-center">
            <a
              href="https://github.com/DavidMessmore"
              target="_blank"
              className="transition hover:bg-stone-200 dark:hover:bg-stone-600 text-3xl block py-2 border-b-2"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <button
              onClick={toggleDarkMode}
              className="transition hover:bg-stone-200 dark:hover:bg-stone-600 text-3xl block w-full py-2"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
