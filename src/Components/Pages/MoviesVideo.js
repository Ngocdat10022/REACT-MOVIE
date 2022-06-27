import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ApiKey, fetcher, tmdbApi } from "../../config/config";

const MoviesVideo = () => {
  const { moviesId } = useParams();
  const { data } = useSWR(tmdbApi.GetMoviesMeta(moviesId, "videos"), fetcher);
  if (!data) return;
  const { results } = data;
  //   if (!results || results.length <= 0) return null;
  return (
    <div>
      <h1 className="text-center mt-20 text-[40px]">Trailer</h1>
      {results.slice(0, 1).map((item) => {
        return (
          <div
            key={item.id}
            className="grid grid-cols-4 gap-4 mt-10 w-[800px] mx-auto aspect-video"
          >
            <iframe
              width="800"
              height="315"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
// <iframe width="560" height="315" src="https://www.youtube.com/embed/OB3g37GTALc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
export default MoviesVideo;
