const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p";
const TMDB_API_KEY = "24efa512c563c1804c2dfe059df21f61";
const YT_BASE_URL = 'https://www.youtube.com/watch?v=';

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  TOP_RATED_MOVIES: "/movie/top_rated",
  POPULAR_MOVIES: "/movie/popular",
  MOVIE_GENRES: "/genre/movie/list",
  MOVIE: "/movie",
  SEARCH_MOVIES: "/search/movie",

  NOW_PLAYING_SHOWS: "/tv/airing_today",
  UPCOMING_SHOWS: "/tv/on_the_air",
  TOP_RATED_SHOWS: "/tv/top_rated",
  POPULAR_SHOWS: "/tv/popular",
  SHOW_GENRES: "/genre/tv/list",
  SHOW: "/tv",
  SEARCH_SHOWS: "/search/tv"
};

const APPEND_TO_RESPONSE = {
  TRAILER: `videos`,
  PROVIDERS: `watch/providers`,
};

export { TMDB_API_KEY, TMDB_BASE_URL, TMDB_IMAGE_URL, ENDPOINTS , APPEND_TO_RESPONSE, YT_BASE_URL};
