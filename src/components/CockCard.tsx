import React from "react";
import bgImage from "../assets/images/CardBackground.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cock1 from "../assets/images/chicken_head1.png";
import Cock2 from "../assets/images/chicken_head2.png";
import Cock3 from "../assets/images/chicken_head3.png";
import Cock4 from "../assets/images/chicken_head4.png";
import Cock5 from "../assets/images/chicken_head5.png";
import Arrow from "../assets/images/up right.png";

type CockImage = {
  src: string;
  className: string;
};

type CardProps = {
  cockImages: CockImage[];
};

const CockCard: React.FC<CardProps> = ({ cockImages }) => {
  return (
    <div className="relative overflow-hidden cursor-pointer 2xl:w-[318px] 2xl:h-[330px] flex w-[226px] h-[220px] sm:w-[230px] sm:h-[225px] md:w-[240px] md:h-[235px] lg:w-[260px] lg:h-[270px] xl:w-[290px] xl:h-[310px] hover:scale-90">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover rounded-3xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content with Cock Images Positioned at the Bottom */}
      <div className="absolute bottom-0 flex flex-col items-center">
        {cockImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="Cock Character"
            className={image.className}
          />
        ))}
      </div>

      {/* Floating Button */}
      <button className="absolute flex items-center justify-center w-[51px] h-[51px] transition rounded-full shadow-lg bottom-0 md:right-0 bg-[#151D00] hover:bg-[#B5FF07] 2xl:w-[72px] 2xl:h-[72px] -right-0 xl:right-0 lg:right-1 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[65px] xl:h-[65px] hover:scale-90">
        <img src={Arrow} alt="arrow" className="w-[21px] h-[21px] md:h-[30px] md:w-[30px]" />
      </button>
    </div>
  );
};

const cockImagesList = [
  [
    {
      src: Cock5,
      className:
        "w-[137px] h-[171px] sm:w-[160px] sm:h-[190px] md:w-[180px] md:h-[210px] lg:w-[200px] lg:h-[240px] xl:w-[210px] xl:h-[260px] 2xl:w-[223px] 2xl:h-[287px]",
    },
  ],
  [
    {
      src: Cock4,
      className:
        "w-[137px] h-[171px] sm:w-[160px] sm:h-[190px] md:w-[160px] md:h-[210px] lg:w-[190px] lg:h-[240px] xl:w-[210px] xl:h-[260px] 2xl:w-[221px] 2xl:h-[286px]",
    },
  ],
  [
    {
      src: Cock3,
      className:
        "w-[137px] h-[171px] sm:w-[160px] sm:h-[190px] md:w-[180px] md:h-[210px] lg:w-[200px] lg:h-[240px] xl:w-[215px] xl:h-[270px] 2xl:w-[241px] 2xl:h-[278px]",
    },
  ],
  [
    {
      src: Cock2,
      className:
        "w-[137px] h-[171px] sm:w-[160px] sm:h-[190px] md:w-[180px] md:h-[210px] lg:w-[200px] lg:h-[240px] xl:w-[225px] xl:h-[280px] 2xl:w-[238px] 2xl:h-[299px]",
    },
  ],
  [
    {
      src: Cock1,
      className:
        "w-[137px] h-[171px] sm:w-[160px] sm:h-[190px] md:w-[160px] md:h-[210px] lg:w-[190px] lg:h-[240px] xl:w-[220px] xl:h-[270px] 2xl:w-[224px] 2xl:h-[265px]",
    },
  ],
];

const CockCardSlider = () => {
  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-8 2xl:flex-row 2xl:gap-[32px] 2xl:flex-wrap">
      <div className="hidden 2xl:flex flex-row gap-[32px] justify-center items-center">
        {cockImagesList.map((images, index) => (
          <CockCard key={index} cockImages={images} />
        ))}
      </div>
      <div className="w-full 2xl:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            380: { slidesPerView: 1.5 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          
          }}
          modules={[]}
          className="w-full max-w-screen-lg mx-auto"
        >
          {cockImagesList.map((images, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <CockCard cockImages={images} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { CockCard, CockCardSlider };
