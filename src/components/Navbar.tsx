import React, { useState } from "react";
import NavButton from "./NavButton";
import MobileMenuToggle from "./MobileMenuToggle";
import Logo from "../assets/images/Logo .png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");

  const navItems = [
    { label: "HOME", key: "HOME", href: "#home" },
    { label: "ABOUT US", key: "ABOUT", href: "#about" },
    { label: "TOKENOMICS", key: "TOKENOMICS", href: "#tokenomics" },
    { label: "HOW TO BUY", key: "HOWTOBUY", href: "#how-to-buy" },
    { label: "ROAD MAP", key: "ROADMAP", href: "#roadmap" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    setMenuOpen(false);
  };

  return (
    <header className="z-50 px-4 py-4 bg-transparent ">
      <div className="flex flex-col items-center w-full md:mt-[2px]">
        {/* Desktop Navigation */}
        <div className="flex-col items-center hidden md:flex">
          {/* Logo */}
          <div className="mb-2">
            <img
              src={Logo}
              alt="Coq's Race Logo"
              className="
                         md:w-[70px] md:h-[70px] 
                         lg:w-[80px] lg:h-[80px] 
                         xl:w-[95px] xl:h-[95px] 
                         2xl:w-[101px] 2xl:h-[101px]"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-2 mt-6 md:gap-2 lg:gap-4 xl:gap-5">
            {navItems.map((item) => (
              <NavButton
                key={item.key}
                label={item.label}
                href={item.href}
                isActive={activeTab === item.key}
                onClick={() => handleTabClick(item.key)}
              />
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="fixed left-0 right-0 flex items-center justify-between w-full -mt-10 md:hidden">
          {/* Logo */}
          <a href="#">
            <img
              src={Logo}
              alt="Coq's Race Logo"
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] "
            />
          </a>

          {/* Mobile Menu Button */}
          <MobileMenuToggle isOpen={menuOpen} onClick={toggleMenu} />

          {/* Mobile Menu Overlay */}
          <nav
            className={`fixed inset-0 flex flex-col items-center justify-center bg-[#263b0f] transition-opacity duration-300 z-40 ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavButton
                  key={item.key}
                  label={item.label}
                  href={item.href}
                  variant="mobile"
                  isActive={activeTab === item.key}
                  onClick={() => handleTabClick(item.key)}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
