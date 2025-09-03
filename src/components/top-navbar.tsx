import GlassSurface from "./ui/glass-surface";
import { logo_main } from "@/utils/images";

const navLinks = [
  { title: "Home", link: "/#home" },
  { title: "About Us", link: "/#about-us" },
  { title: "Products", link: "/#products" },
  { title: "Financing", link: "/#financing" },
  { title: "How it Works", link: "/#how-it-works" },
  { title: "Contact Us", link: "/#contact-us" },
];

const TopNavbar = () => {
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
                className={`w-28 md:w-48 h-16 object-contain block`}
                src={logo_main}
                alt="Main Logo"
                loading="lazy"
              />
            </div>
          </a>
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
        </div>
      </GlassSurface>
    </>
  );
};

export default TopNavbar;
