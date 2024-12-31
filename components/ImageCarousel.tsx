import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ImageCarousel = ({ images }: { images: string[] }) => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <Image
          src={image}
          width={1920}
          height={800}
          alt={`Slide ${index}`}
          className="w-full h-full object-cover"
          priority
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageCarousel;
