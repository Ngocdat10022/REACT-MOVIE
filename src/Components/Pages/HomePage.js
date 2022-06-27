import React from "react";
import MovieList from "../Movies/MovieList";

const HomePage = () => {
  return (
    <div>
      <div className="page-container text-white ">
        <h2 className="text-[25px] mt-10 mb-10 font-bold">Now Playing</h2>
        <MovieList type="now_playing" />
        <h2 className="text-[25px] mt-10 mb-10 font-bold">Top rated Movie</h2>
        <MovieList type="top_rated" />
        <h2 className="text-[25px] mt-10 mb-10 font-bold">Traning</h2>
        <MovieList type="upcoming" />
      </div>
    </div>
  );
};

export default HomePage;
