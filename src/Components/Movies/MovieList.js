import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import MoviesCart from "./MoviesCart";
//key 8e19a56f97d894caff6e9e6002a72854
const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbApi.GetMoviesList(type), fetcher);
  const [movieData, setMoviesData] = useState([]);
  useEffect(() => {
    if (data) {
      setMoviesData(data.results);
    }
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView="auto">
        {movieData.length > 0 &&
          movieData.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MoviesCart item={movie} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
