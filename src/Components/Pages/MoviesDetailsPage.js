import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import MoviesCridits from "./MoviesCridits";
import MoviesVideo from "./MoviesVideo";
import MoviesSimilar from "./MoviesSimilar";
const MoviesDetailsPage = () => {
  const { moviesId } = useParams();
  const { data } = useSWR(tmdbApi.GetMoviesDetails(moviesId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, overview, genres } = data;

  return (
    <div className="py-20">
      <div className="w-full h-[800px] relative">
        <div className="overlay absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-fill h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbApi.ImageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-[800px] h-[400px] mx-auto -mt-[200px] relative">
        <img
          className="w-full h-full  object-cover"
          src={`${tmdbApi.ImageOriginal(poster_path)}`}
          alt=""
        />
      </div>
      <div className="pt-10 pb-10 flex items-center justify-center">
        <h3 className="text-white font-medium text-[20px] ">{title}</h3>
      </div>
      <div className="mb-10 flex items-center justify-center gap-5">
        {genres.length > 0 &&
          genres.map((item) => {
            return (
              <span className="py-2 px-4 border rounded-lg" key={item.id}>
                {" "}
                {item.name}
              </span>
            );
          })}
      </div>
      <div className="w-[800px] mx-auto text-center flex items-center justify-center">
        <p>{overview}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-[40px]">Casts</h3>
      </div>
      <MoviesCridits />
      <MoviesVideo />
      <MoviesSimilar />
    </div>
  );
};

export default MoviesDetailsPage;
