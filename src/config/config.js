export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const ApiKey = "8e19a56f97d894caff6e9e6002a72854";
const tmbdEndPoint = "https://api.themoviedb.org/3/movie";
const tmbdEndPointSearch = "https://api.themoviedb.org/3/search/movie";

export const tmdbApi = {
  GetMoviesList: (type, page = 1) =>
    `${tmbdEndPoint}/${type}?api_key=${ApiKey}&page=${page}`,
  GetMoviesSearch: (valueDebounced, page = 1) =>
    `${tmbdEndPointSearch}?api_key=${ApiKey}&query=${valueDebounced}&page=${page}`,
  GetMoviesDetails: (moviesId) =>
    `${tmbdEndPoint}/${moviesId}?api_key=${ApiKey}`,
  GetMoviesMeta: (moviesId, type) =>
    `${tmbdEndPoint}/${moviesId}/${type}?api_key=${ApiKey}`,
  ImageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  Image500: (url) => `https://image.tmdb.org/t/p/w500${url}`,
};
