import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/scss";
import Button from "../Button/Button";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=8e19a56f97d894caff6e9e6002a72854`,
    fetcher
  );
  const moive = data?.results || [];
  return (
    <>
      <section className="banner page-container mx-auto h-[500px] relative mt-8">
        <Swiper grabCursor={true} slidesPerView="auto">
          {moive.length > 0 &&
            moive.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <BannerItem item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
};

function BannerItem({ item }) {
  const { id } = item;
  const Navigate = useNavigate();
  return (
    <>
      <div className="overlay absolute inset-0 z-10 bg-[rgba(0,0,0,0.5)] bg-gradient-to-t"></div>
      <div className="w-full h-full bg-white rounded-lg">
        {/*  eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          className="h-full w-full object-cover rounded-lg object-top"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        ></img>
      </div>
      <div className="absolute left-5 bottom-5 z-20">
        <div className="text-white text-[40px] font-bold">
          <span>Avenger: EndGame</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold">
          <span className="px-4 py-2 border rounded-sm ">Action</span>
          <span className="px-4 py-2 border rounded-sm ">Adventure</span>
          <span className="px-4 py-2 border rounded-sm ">Drama</span>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <Button onClick={() => Navigate(`/movies/${id}`)} full={false}>
            Watch Now
          </Button>
        </div>
      </div>
    </>
  );
}
export default Banner;
