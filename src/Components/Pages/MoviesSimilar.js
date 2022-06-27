import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { ApiKey, fetcher, tmdbApi } from "../../config/config";
import MoviesCart from "../Movies/MoviesCart";

const MoviesSimilar = () => {
  const { moviesId } = useParams();
  const { data } = useSWR(tmdbApi.GetMoviesMeta(moviesId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);
  return (
    <>
      <h3 className="text-[30px] my-10">Similar Movies</h3>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView="auto">
          {results.length > 0 &&
            results.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MoviesCart item={movie} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default MoviesSimilar;
