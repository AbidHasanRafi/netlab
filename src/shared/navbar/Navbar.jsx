import { useState, useEffect } from "react";
import { PiSunFill } from "react-icons/pi";
import { HiMoon } from "react-icons/hi";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo/netlab-white.svg";
import logoDark from "../../assets/logo/netlab-dark.svg";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Code Editor", href: "/ide" },
  { name: "Assessments", href: "/assessments" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-1 lg:px-4 py-2 bg-white dark:bg-[#1A1A1A] transition-colors duration-300 ${
        darkMode ? "bg-dark" : "bg-light"
      } z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div
            title="NetLab"
            className={`text-xl px-4 lg:px-0 font-semibold ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            <img className="w-24 md:w-28" src={darkMode ? logoDark : logoWhite} alt="NetLab Logo" />
          </div>
        </Link>
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none transition-transform duration-300 ease-in-out"
          >
            {darkMode ? (
              <PiSunFill className="text-xl" />
            ) : (
              <HiMoon className="text-xl" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none transition-transform duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <MdOutlineMenuOpen className="text-2xl" />
            ) : (
              <MdOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              title={item.name}
              className={`hover:text-gray-600 dark:hover:text-gray-300 font-normal px-2 py-2 transition-colors duration-300 ease-in-out ${
                darkMode ? "text-light" : "text-dark"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none transition-transform duration-300 ease-in-out"
          >
            {darkMode ? (
              <PiSunFill className="text-xl" />
            ) : (
              <HiMoon className="text-xl" />
            )}
          </button>
        </div>
        <div
          className={`lg:hidden absolute top-16 left-4 right-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg rounded-md transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 max-h-screen scale-100 visible"
              : "opacity-0 max-h-0 scale-95 invisible"
          }`}
        >
          <div className="overflow-hidden">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                title={item.name}
                className={`block hover:text-gray-600 dark:hover:text-gray-100 font-normal px-6 py-3 transition-colors duration-300 ease-in-out ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
