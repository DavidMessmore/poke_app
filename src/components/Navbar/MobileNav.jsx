import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const MobileNav = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="w-screen bg-stone-200 dark:bg-lessdark dark:text-white absolute left-0 top-24 flex flex-col items-center divide-y-2 divide-stone-700 border-b-2 border-stone-700">
      <a
        href="https://github.com/DavidMessmore"
        target="_blank"
        className="transition hover:text-stone-400 text-3xl block w-full text-center py-4"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <button
        onClick={toggleDarkMode}
        className="transition hover:text-stone-400 text-3xl block w-full py-4"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
};
export default MobileNav;
