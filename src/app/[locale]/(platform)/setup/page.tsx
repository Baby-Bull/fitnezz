import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import Image from "next/image";


// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SetUpProfilePage = () => {
  return (
    <div className="container">
      <div className="header-text mt-[90px] text-center shadow-lg">
        <h4 className="upper-text title-h4-bold">What is your goal ?</h4>
        <p className="text-small-regular mt-[5px] w-[50%] mx-auto">
          It will help us to choose a best program for you
        </p>
      </div>
      <div className="slide-goal">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={2}
          centeredSlides
          style={{ height: "500px" }}
        >
          <SwiperSlide class="swiper-slide w-[300px]">
            <Image
              src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <Image
              src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/11.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <Image
              src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div className="button-confirm"></div>
    </div>
  );
};

export default SetUpProfilePage;
