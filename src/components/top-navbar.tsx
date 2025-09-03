import { Menu, X } from "lucide-react";
import GlassSurface from "./ui/glass-surface";
import { logo_main } from "@/utils/images";
import { useState } from "react";

const navLinks = [
  { title: "Home", link: "/#home" },
  { title: "About Us", link: "/#about-us" },
  { title: "Products", link: "/#products" },
  { title: "Financing", link: "/#financing" },
  { title: "How it Works", link: "/#how-it-works" },
  { title: "Contact Us", link: "/#contact-us" },
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <GlassSurface
        width="100%"
        className="h-12 rounded-none fixed top-0 z-[9999] !bg-white/60"
      >
        <div className="w-[90vw] mx-auto flex flex-row items-center justify-between h-12 my-4 max-w-[1440px]">
          <a className="flex flex-row items-center" href="/">
            <div className="w-full max-md:w-3/5 h-12 relative flex items-center">
              <img
                className={`w-48 h-16 object-contain block`}
                src={logo_main || "/placeholder.svg"}
                alt="Main Logo"
                loading="lazy"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center justify-between">
            <ul className="flex flex-row w-full md:gap-4 lg:gap-6 justify-between">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-[#1836B2] leading-[19px] cursor-pointer font-normal text-sm"
                >
                  {link.title}
                </a>
              ))}
            </ul>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-[#1836B2] hover:bg-white/20 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </GlassSurface>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile sidebar header */}
          <div className="flex items-center justify-between p-4 border-b">
            <img
              className="w-32 h-12 object-contain"
              src={logo_main || "/placeholder.svg"}
              alt="Main Logo"
              loading="lazy"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-[#1836B2] hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    onClick={closeMobileMenu}
                    className="block text-[#1836B2] text-lg font-medium py-3 px-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
