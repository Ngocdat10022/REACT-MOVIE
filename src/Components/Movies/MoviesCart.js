import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbApi } from "../../config/config";
import Button from "../Button/Button";
const MoviesCart = ({ item }) => {
  const { id } = item;
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between cart p-3 bg-slate-800 rounded-lg relative z-10 h-[100%] select-none cursor-pointer">
        {/*  eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={`${tmdbApi.Image500(item.backdrop_path)}`}
          className="w-full h-[250px] rounded-lg object-cover"
        />
        <div className="flex flex-col flex-1 justify-between">
          <h4 className="mt-4 font-bold8 font-medium">{item.title}</h4>
          <div className="flex items-center justify-between mb-5 mt-5 text-slate-500 text-[15px]">
            <span>{new Date(item.release_date).getFullYear()} </span>
            <span>{item.vote_average}</span>
          </div>
          <Button onClick={() => Navigate(`/movies/${id}`)} full={true}>
            {" "}
            Watch Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default MoviesCart;
