import React from "react";
import { ArrowUpRight } from "lucide-react"; // Icon for the button

interface CardProps {
  imageSrc: string;
  altText: string;
}

const CockCard: React.FC<CardProps> = ({ imageSrc, altText }) => {
  return (
    <div className="relative bg-[#EDF2D1] w-[320px] h-[340px] rounded-[40px] shadow-lg p-6 flex justify-center items-end space-x-10">
      {/* Unique shape effect */}
      <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-[#EDF2D1] rounded-br-[40px]"></div>

      {/* Chicken Image */}
      <img
        src={imageSrc}
        alt={altText}
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[250px] h-auto"
      />
    
      {/* Bottom Right Icon Button */}
      <button className="absolute bottom-3 right-3 bg-[#2E3B1F] hover:bg-[#4A5D3D] text-white p-2 rounded-full">
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

export default CockCard;
