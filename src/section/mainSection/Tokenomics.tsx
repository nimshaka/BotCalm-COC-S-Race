import TaxCard from "@/components/TaxCard";
import Background from "../../assets/images/Background.png";
import Cock4 from "../../assets/images/Cock4.png";
import Connector from "@/components/Connector";
import BuyCard from "@/components/BuyCard";

export default function Tokenomics() {
  return (
    <div className="relative bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801]   md:mt-[100px] overflow-hidden  max-w-[1920px] mx-auto">
      <img
        src={Background}
        alt="background"
        className="hidden h-auto mx-auto bg-center bg-cover md:flex md:items-center md:justify-center max-w-[1920px] xl:h-[1500px] md:h-[1300px] 2xl:h-[1704px] lg:h-[1300px]"
      />
      <div className="md:absolute bg-gradient-to-r from-[#1D2801]/95 via-[#324503]/95 to-[#1D2801]/95 top-0 left-0 right-0 bottom-0 md:flex md:justify-center overflow-hidden ">
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col overflow-hidden  md:mt-[129px]  ">
            <div className="font-CaesarDressingRegular 2xl:text-[74px] flex  text-[40px] justify-center md:justify-start md:px-4  mt-[50px] md:mt-0">
              <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
                TOKENOMICS
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-x-1  md:flex-row mt-[50px] md:p-2 2xl:p-0">
              <TaxCard title="Buy Tax" value="0%" />
              <Connector />
              <TaxCard title="Sell Tax" value="0%" />
              <Connector />
              <TaxCard title="Burnt" value="liquidity" />
            </div>
          </div>

          <div className="flex flex-col   md:mt-[100px] mt-[50px]">
            <div className="font-CaesarDressingRegular 2xl:text-[74px] flex  text-[40px] justify-center md:justify-start md:px-4 ">
              <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
                HOW TO BUY
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-x-1  md:flex-row mt-[50px]  md:px-4 ">
              <BuyCard
                title="create a wallet"
                description="Set up a secure crypto wallet to store and manage your digital assets safely."
              />
              <Connector />
              <BuyCard
                title="Buy some ETH"
                description="Purchase Ethereum through a crypto exchange to use for transactions & gas fees."
              />
              <Connector />
              <BuyCard
                title="visit uniswap"
                description="Go to the Uniswap platform, connect your wallet, and prepare to trade or swap assets."
              />
              <Connector />
              <BuyCard
                title="swap to $Telang"
                description="On Uniswap, exchange your ETH for $Telang by executing a swap through the decentralized platform."
              />
            </div>
          </div>

          <div className="flex flex-col justify-center md:flex-row 2xl:mt-[100px] mt-[50px] lg:mt-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src={Cock4}
                alt="cock4"
                className="2xl:w-[516px] 2xl:h-[516px] w-[248px] h-[248px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex font-CaesarDressingRegular mt-[50px] md:mt-0 md:text-nowrap md:mr-2">
                <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] 2xl:text-[64px] text-[40px] text-left md:ml-0 ml-4 lg:text-[50px] xl:text-[56px]">
                  give your answers to know COQ
                </p>
              </div>
              <div className="flex items-center justify-center font-CaesarDressingRegular md:mt-[30px] mt-[50px]">
                <div className="bg-[#151D00] rounded-3xl 2xl:w-[1197px] 2xl:h-[388px] mx-auto w-[378px] h-[329px] md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[300px] xl:w-[900px] xl:h-[350px] xl:mr-3">
                  <div className="space-y-[30px] flex justify-center flex-col items-center 2xl:mt-[66px] mt-[37px]">
                    <div className="flex items-center justify-between bg-[#F4FFDB] rounded-full 2xl:w-[1001px] 2xl:h-[65px] w-[302px] h-[65px] md:w-[450px] md:h-[60px] lg:w-[600px] lg:h-[60px] xl:w-[800px] xl:h-[62px] ">
                      <span className="text-[#151D00] md:text-[20px] p-5 text-[14px] lg:text-[18px] xl:text-[20px]">
                        HOW DO I BUY COO?
                      </span>
                      <button className="text-[#FDF4DC] transition-colors bg-[#EB2D26] border-[#151D00] rounded-full text-[20px] border-4 2xl:h-[49px] 2xl:w-[137px] md:mr-6 w-[137px] h-[49px] mr-2 lg:w-[120px] lg:h-[45px] xl:w-[130px] xl:h-[47px]">
                        BUY
                      </button>
                    </div>
                    <div className="bg-[#F4FFDB] 2xl:w-[1001px] 2xl:h-[65px] rounded-full text-[#151D00] md:text-[20px] p-5 w-[302px] h-[65px] text-[14px] md:w-[450px] md:h-[60px] lg:w-[600px] lg:h-[60px] xl:w-[800px] xl:h-[62px] lg:text-[18px] xl:text-[20px]">
                      IS THIS A ORIGINAL COO?
                    </div>
                    <div className="bg-[#F4FFDB] 2xl:w-[1001px] 2xl:h-[65px] rounded-full text-[#151D00] md:text-[20px] p-5 w-[302px] h-[65px] text-[14px] md:w-[450px] md:h-[60px] lg:w-[600px] lg:h-[60px] xl:w-[800px] xl:h-[62px] lg:text-[18px] xl:text-[20px]">
                      WHICH BLOCKCHAIN?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
