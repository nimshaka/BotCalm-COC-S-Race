import React from "react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="z-10 p-2 rounded-md bg-[#b7ff00] focus:outline-none w-[50px] h-[50px]"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="block w-5 h-0.5 bg-black mb-1"></span>
        <span className="block w-5 h-0.5 bg-black mb-1"></span>
        <span className="block w-5 h-0.5 bg-black"></span>
      </div>
    </button>
  );
};

export default MobileMenuToggle;
