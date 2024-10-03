import { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const hideMenu = () => {
    setMenuVisible(false);
  };

  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 50) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <nav
      className={`sticky top-0 z-50 ${
        changeColor ? "color-active" : ""
      } shadow`}
    >
      <div className="container flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <img src={logo} alt="Logo KLIN" />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center gap-x-10 font-bold">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#business"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Business Scope
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Project Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200 border py-4 px-8 rounded-[10px] border-[#383838]"
              >
                Get Company Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuVisible ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>
        <div
          id="menu"
          className={`bg-color-primary-dark min-h-screen absolute inset-0 ${
            menuVisible ? "" : "hidden"
          }`}
        >
          <ul className="h-full grid place-items-center py-20">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#business"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Business Scope
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Project Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Get Company Profile
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
