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
    ${isActive ? "bg-[#b7ff00]" : "bg-[#F4FFDB]"}
    text-black 
    font-CaesarDressingRegular
    text-[10px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl 
    border-4 border-black 
    cursor-pointer
  `;

  const mobileClasses = `
    px-6 py-2 
    font-semibold 
    text-center 
    text-black 
    ${isActive ? "bg-[#b7ff00]" : "bg-white"} 
    rounded-full
  `;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
  };

  return variant === "desktop" ? (
    <div className={`${desktopClasses} ${className}`} onClick={handleClick}>
      {label}
    </div>
  ) : (
    <a
      href={href}
      className={`${mobileClasses} ${className}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

export default NavButton;
