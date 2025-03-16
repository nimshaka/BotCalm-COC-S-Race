import TaxCard from "@/components/TaxCard";
import Background from "../../assets/images/Background.png";
import Connector from "@/components/Connector";
import BuyCard from "@/components/BuyCard";

export default function Tokenomics() {
  return (
    <div className="relative bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801]   md:mt-[100px] overflow-hidden">
      <img
        src={Background}
        alt=""
        className="hidden w-full h-full mx-auto bg-center bg-cover md:flex md:items-center md:justify-center"
      />
      <div className="md:absolute bg-gradient-to-r from-[#1D2801]/95 via-[#324503]/95 to-[#1D2801]/95 top-0 left-0 right-0 bottom-0 md:flex md:justify-center overflow-hidden ">
        
        <div className="flex flex-col overflow-hidden">
        
        <div className="flex flex-col overflow-hidden  md:mt-[129px] -mt-[10px]">
          <div className="font-CaesarDressingRegular 2xl:text-[74px] flex  text-[40px] justify-center md:justify-start">
            <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
              TOKENOMICS
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-x-1  md:flex-row mt-[50px]">
            <TaxCard title="Buy Tax" value="0%" />
            <Connector />
            <TaxCard title="Sell Tax" value="0%" />
            <Connector />
            <TaxCard title="Burnt" value="liquidity" />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden  md:mt-[100px] mt-[50px]">
          <div className="font-CaesarDressingRegular 2xl:text-[74px] flex  text-[40px] justify-center md:justify-start">
            <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
              HOW TO BUY
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-x-1  md:flex-row mt-[50px]">
            <BuyCard title="create a wallet" value="Set up a secure crypto wallet to store and manage your digital assets safely." />
            <Connector />
            <BuyCard title="Buy some ETH" value="Purchase Ethereum through a crypto exchange to use for transactions & gas fees." />
            <Connector />
            <BuyCard title="visit uniswap" value="Go to the Uniswap platform, connect your wallet, and prepare to trade or swap assets." />
            <Connector />
            <BuyCard title="swap to $Telang" value="On Uniswap, exchange your ETH for $Telang by executing a swap through the decentralized platform." />
          </div>
        </div>

        

        </div>


      </div>
      
     
    </div>
  );
}
