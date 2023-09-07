import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex flex-row gap-10 items-center">
      <a
        href="https://github.com/DavidMessmore"
        target="_blank"
        className="transition hover:text-stone-400 text-3xl"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <button
        onClick={toggleDarkMode}
        className="transition hover:text-stone-400 text-3xl"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
};
export default DesktopNav;
