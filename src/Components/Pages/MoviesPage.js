import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import useDebounced from "../../Hooks/useDebounced";
import MoviesCart from "../Movies/MoviesCart";
import LoadingSkeleton from "../Styles/LoadingSkeleton";
import { v4 } from "uuid";
// import ReactPaginate from "react-paginate";
//https://api.themoviedb.org/3/search/movie?api_key=8e19a56f97d894caff6e9e6002a72854&query=jack
// const itemsPerPage = 20;
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbApi.GetMoviesList("popular", 1));
  const handlChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
  };
  const valueDebounced = useDebounced(1000, query);
  const handlSearch = () => {
    setLoading(true);
    setUrl(tmdbApi.GetMoviesSearch(valueDebounced, nextPage));
  };
  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  // const isLoading = !data && !error;
  useEffect(() => {
    console.log(data);
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  //LIBARY react-paginate
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   if (!data || !data.total_results) return;
  //   setPageCount(Math.ceil(data.total_results / itemsPerPage));
  // }, [itemOffset, data]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % data.total_results;
  //   setItemOffset(newOffset);
  //   console.log(event.selected + 1);
  //   setNextPage(event.selected + 1);
  // };

  useEffect(() => {
    setUrl(tmdbApi.GetMoviesList("popular", nextPage));
  }, [nextPage]);
  if (!data) return null;

  const { page } = data;

  return (
    <div className="py-10">
      <div className="flex">
        <div className="flex-1 ">
          <input
            type="text"
            placeholder="search Movies"
            value={query}
            className="w-full p-3 bg-slate-800 outline-none text-white"
            onChange={handlChange}
          />
        </div>
        <button className="p-3  bg-[#cc0850]" onClick={handlSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {loading &&
          movies.length > 0 &&
          movies.map(() => {
            return (
              <div
                key={v4()}
                className="flex flex-col justify-between cart p-3 bg-slate-800 rounded-lg relative z-10 h-[100%] select-none cursor-pointer"
              >
                <LoadingSkeleton width="100%" height="250px" />

                <div className="flex flex-col flex-1 justify-between">
                  <LoadingSkeleton width="100%" height="30px" />

                  <div className="flex items-center justify-between mb-5 mt-5 text-slate-500 text-[15px]">
                    <LoadingSkeleton width="50px" height="10px" />
                    <LoadingSkeleton width="10px" height="10px" />
                  </div>
                  <button className="px-8 py-2 rounded-lg bg-[#cc0850] text-white font-medium w-full mt-auto">
                    <LoadingSkeleton width="100%" />
                  </button>
                </div>
              </div>
            );
          })}

        {!loading &&
          movies.length > 0 &&
          movies.map((item) => {
            return <MoviesCart key={item.id} item={item} />;
          })}
      </div>
      {/* //LIBARY react-paginate */}
      {/* <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className="demo"
        />
      </div> */}
      <div className="mt-10 flex items-center justify-center gap-5 ">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (page === 1) return;
            setNextPage(nextPage - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        {new Array(5).fill(0).map((item, index) => {
          return (
            <span
              key={index}
              className="px-4 py-2 border rounded cursor-pointer"
              style={index + 1 === nextPage ? { borderColor: "red" } : null}
              onClick={() => setNextPage(index + 1)}
            >
              {index + 1}
            </span>
          );
        })}
        <span
          onClick={() => setNextPage(nextPage + 1)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviesPage;
