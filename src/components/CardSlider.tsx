import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CockCard from "./CockCard"; // Import the Card component
import Cock1 from '../assets/images/chicken_head1.png'
import Cock2 from '../assets/images/chicken_head2.png'
import Cock3 from '../assets/images/chicken_head3.png'
import Cock4 from '../assets/images/chicken_head4.png'
import Cock5 from '../assets/images/chicken_head5.png'

const images = [
  { src: Cock1, alt: "Chicken Astronaut 1" },
  { src: Cock2, alt: "Chicken Astronaut 2" },
  { src: Cock3, alt: "Chicken Astronaut 3" },
  { src: Cock4, alt: "Chicken Astronaut 4" },
  { src: Cock5, alt: "Chicken Astronaut 5" },
];

const CardSlider: React.FC = () => {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <CockCard imageSrc={img.src} altText={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
