import {
  facebook_logo,
  instagram_logo,
  linkedin_logo,
  logo_main,
} from "@/utils/images";

const navLinks = [
  { title: "Home", link: "/#home" },
  { title: "Products", link: "/#products" },
  { title: "About Us", link: "/#about-us" },
  { title: "Financing", link: "/#financing" },
  { title: "How it Works", link: "/#how-it-works" },
  { title: "Contact Us", link: "/#contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-4 w-full flex h-auto flex-col-reverse items-center">
      <div className="container mx-auto text-center md:hidden">
        <p className="text-sm md:text-base font-semibold text-[#454545]">
          © {new Date().getFullYear()} SapphireCredit. All rights reserved.
        </p>
      </div>
      <div className="flex flex-row my-4 justify-between w-full items-center px-6">
        <div className="w-1/3 md:w-auto">
          <img src={logo_main} alt="" className="max-w-40 w-full" />
        </div>
        <div className="hidden md:flex items-center">
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
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/company/sapphire-virtual-network-limited/"
            className="mx-2"
          >
            <img
              src={linkedin_logo}
              alt="LinkedIn"
              className="inline-block w-6 h-6"
            />
          </a>
          <a
            href="https://www.instagram.com/sapphirecredit.ng?igsh=MTkwaTB6Znl5NTRmMg=="
            className="mx-2"
          >
            <img
              src={instagram_logo}
              alt="Instagram"
              className="inline-block w-6 h-6"
            />
          </a>
          <a
            href="https://www.facebook.com/share/1DGiaRrBrB/?mibextid=wwXIfr"
            className="mx-2"
          >
            <img
              src={facebook_logo}
              alt="Facebook"
              className="inline-block w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
