import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ApiKey, fetcher, tmdbApi } from "../../config/config";

const MoviesCridits = () => {
  const { moviesId } = useParams();
  const { data } = useSWR(tmdbApi.GetMoviesMeta(moviesId, "credits"), fetcher);
  if (!data) return;
  const { cast } = data;
  const casts = cast.slice(0, 8);
  if (!casts || casts.length <= 0) return null;
  return (
    <div className="mt-10 mb-10 w-[800px] mx-auto grid grid-cols-4 gap-4">
      {casts.length > 0 &&
        casts.map((item) => {
          return (
            <div key={item.id} className="pt-10">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                alt=""
              />
              <span className="text-center block mt-5">
                {item.original_name}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default MoviesCridits;
