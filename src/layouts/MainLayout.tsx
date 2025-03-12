
import { LayoutProps } from "@/types/MainLayoutTypes";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801] overflow-hidden">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
