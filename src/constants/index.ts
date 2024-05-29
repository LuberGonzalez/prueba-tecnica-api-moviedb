import axios from "axios";

export const BASE_URL = `https://api.themoviedb.org/3/movie/` as const;

export const TITTLE_APP = "Movie App";

export const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmE4NWFlZjBjMTY5MzIwNjYzZTQwNGY3Y2M5ZjRiMiIsInN1YiI6IjYzYWM4N2JjNTc1MzBlMDA4MDEyZGYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MpB_t_hkm_OgRqdEhjV1KCPY9-C9qQ350A1So2TyFVM`;

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: { accept: "application/json", Authorization: `Bearer ${TOKEN}` },
});

export const ROUTES_API = {
  NOW_PLAYING: "now_playing",
  POPULAR: "popular",
};
