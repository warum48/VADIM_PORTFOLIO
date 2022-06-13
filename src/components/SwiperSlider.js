//-----basic
import React, { useState, useEffect, useContext } from "react";
//import { RouterContext } from "components/RouterContext";
//import { PackSlide } from "components/PackSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"; ///bundle
//import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";
//import { EffectFade } from 'swiper';
//import { EffectCreative } from "swiper";
import SwiperCore, { EffectCreative } from "swiper";
import * as constants from "../CONSTS";
//import 'swiper/css/effect-fade';
//import "swiper/css/effect-creative";
//import "swiper/css/effect-creative";

SwiperCore.use([EffectCreative]);

export function SwiperSlider({ images }) {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          //console.log('slide change', swiper.realIndex);
          //setCurPack(swiper.realIndex);
        }}
        //onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, EffectCreative]}
        loop={true}
        //initialSlide={Number(packId)}
        navigation
        effect={"creative"}
        creativeEffect={{
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
            opacity: 0
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ["100%", 0, 0]
          }
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={"slide" + index}>
            <img
              //style={{ opacity: 0 }}
              //src={constants.imgurl_personal + sizeKeeperSrc}
              src={constants.imgurl_personal + image}
              className="img-fluid"
              alt="..."
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
