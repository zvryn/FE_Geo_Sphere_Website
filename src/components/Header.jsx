import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import HamburgerMenu from "./HamburgerMenu";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { Link } from "react-scroll";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-white bg-color-1 flex items-center ${
        openNavigation ? "bg-color-1" : "bg-color-1/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-10 py-4 lg:px-7.5 xl:px-10 ">
        <a className=" w-[12rem] flex items-center" href="#hero">
          <img src={logo} width={40} height={40} alt="geosphere-logo" />
          <h1 className="ml-4 font-bold text-2xl">Geosphere</h1>
        </a>
      </div>

      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed top-[5rem] left-0 right-0 bottom-0 bg-color-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:mr-24">
          {navigation.map((item) => (
            <Link // Change from <a> to <Link>
              key={item.id}
              to={item.url} // Use 'to' prop for smooth scrolling
              smooth={true} // Enable smooth scrolling
              duration={200} // Duration for scrolling
              onClick={handleClick} // Keep your click handler
              className={`block relative text-2xl uppercase hover:text-color-3 cursor-pointer ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-12 py-6 md:py-8 md:px-7 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                item.url === pathname.hash ? "z-2" : ""
              } `}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <HamburgerMenu />
      </nav>

      <Button
        className="hidden lg:flex lg:mr-12 lg:px-5 lg:font-bold lg:text-xs lg:bg-transparent lg:border-color-4 lg:border-2 lg:text-color-4 hover:border-color-3 hover:bg-color-3/50"
        href="#login"
      >
        SIGN IN
      </Button>

      <Button
        className="ml-auto mr-5 bg-transparent rounded-md lg:hidden px-3 hover:bg-color-3/50"
        onClick={toggleNavigation}
      >
        <MenuSvg openNavigation={openNavigation} />
      </Button>
    </div>
  );
};

export default Header;
