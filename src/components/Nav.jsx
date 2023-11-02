import { useState, useEffect } from "react";
import { BsMapFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add a breakpoint value that suits your design
  const mobileBreakpoint = 768; // Adjust this value as needed

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="flex items-center text-sm justify-between px-4 py-1 text-secondary-clr bg-white">
        <p>Your Pick Up & Delivery Laundry Solution</p>
        <div className="flex items-center gap-5">
          <span className="text-xl">
            <BsMapFill />
          </span>
          <p className="flex flex-col">
            <span>Adra House, </span>
            Riverside Drive, Ground Floor
          </p>
        </div>
        <div>
          <span> Call us on:</span>
          <span>+254 123 456 789</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3 bg-secondary-blue-bg text-primary">
        <h1 className="text-3xl font-Agbalumo font-bold">Laundreal Auto</h1>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden" onClick={toggleMobileMenu}>
          <span className="text-3xl cursor-pointer">
            {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-20 font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-light-blue-bg h-screen flex flex-col gap-2 text-primary pt-5 font-semibold text-2xl">
          <li className=" px-5 cursor-pointer py-5">
            <a href="#home" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#about" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#services" onClick={toggleMobileMenu}>
              Services
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#reviews" onClick={toggleMobileMenu}>
              Reviews
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#contact" onClick={toggleMobileMenu}>
              Contact
            </a>
          </li>
          <hr />
        </ul>
      )}
    </nav>
  );
};

export default Nav;
