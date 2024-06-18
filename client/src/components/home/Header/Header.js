import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo.jpg";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import "../../../assets/font.css";
import "../../../pages/About/About.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);

    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2">
            <div>
              <Image
                className="w-[70px] ml-3 object-cover image-container-hover"
                imgSrc={logo}
              />
            </div>
            <p className="nunito-extrabold hover:text-[#ff9800] text-[#154360]">
              NAT STEEL CO.,TLD.
            </p>
          </Link>
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ml-16 text-[#154360] hover:text-[#ff9800] ${
                showMenu ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <motion.path
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H6"
                />
              ) : (
                <motion.path
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="md:flex">
            {showMenu && (
              <motion.ul
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute md:static top-full left-0 md:left-auto md:top-auto md:relative flex flex-col md:flex-row items-center md:items-start w-full md:w-auto z-50 p-0 gap-2 md:gap-6 md:justify-end bg-white md:bg-transparent md:border-none rounded-md "
              >
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    className={({ isActive }) =>
                      `flex kanit-medium hover:text-[#ff9800] hover:font-bold w-23 h-10 justify-center items-center px-10 text-base hover:underline underline-offset-[4px] decoration-[1px] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 ${
                        isActive ? "text-[#ff9800]" : "text-[#154360]"
                      }`
                    }
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <li>{title}</li>
                  </NavLink>
                ))}
              </motion.ul>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
