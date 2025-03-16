const Connector: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center w-16 h-16 rotate-90 md:rotate-0">
        {/* Dashed Lines on Both Sides */}
        <div className="absolute left-0 right-0 flex items-center justify-between w-full h-full">
          <div className="w-4 border-t-2 border-white border-dashed"></div>
          <div className="w-4 border-t-2 border-white border-dashed"></div>
        </div>
  
        {/* Outer Red Dotted Border */}
        <div className="z-10 flex items-center justify-center bg-transparent border-2 border-red-600 border-dashed rounded-full">
          {/* Outer Solid Yellow Background */}
          <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#FFFACC]">
            {/* Solid White Border with Inner Red Circle */}
            <div className="flex items-center justify-center bg-red-600 border-4 border-white rounded-full w-[36px] h-[36px]"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Connector;
  