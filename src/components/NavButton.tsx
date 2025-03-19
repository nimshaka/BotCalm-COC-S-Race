import React from "react";

export interface NavButtonProps {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "desktop" | "mobile";
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  href = "#",
  isActive = false,
  onClick,
  className = "",
  variant = "desktop",
}) => {
  const desktopClasses = `
    md:w-[120px] md:h-[45px] 
    lg:w-[125px] lg:h-[50px] 
    xl:w-[145px] xl:h-[52px] 
    2xl:w-[170px] 2xl:h-[54px] 
    flex items-center justify-center 
    rounded-full 
    ${isActive ? "bg-[#b7ff00]" : "bg-[#F4FFDB] hover:bg-[#b7ff00]"}
    text-black 
    font-CaesarDressingRegular
    text-[10px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl 
    border-4 border-black 
    cursor-pointer
    transition duration-300
    hover:scale-110
  `;

  const mobileClasses = `
    w-[181px] h-[59px] 
    flex items-center justify-center 
    rounded-full 
    ${isActive ? "bg-[#b7ff00]" : "bg-[#F4FFDB] hover:bg-[#b7ff00]"}
    text-black 
    font-CaesarDressingRegular
    text-[16px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl 
    border-4 border-black 
    cursor-pointer
    transition duration-300
    hover:scale-110
  `;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (onClick) onClick();
    
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href={href} className={`${variant === "desktop" ? desktopClasses : mobileClasses} ${className}`} onClick={handleClick}>
      {label}
    </a>
  );
};

export default NavButton;
