import { QueryKeys } from "./queryKeys";
import { callCurrentMovieGET, callMoviesGET } from "../APIs/callAPIs";

export const moviesQuery = () => ({
  queryKey: [QueryKeys.MOVIES],
  queryFn: async () => {
    return await callMoviesGET();
  },
});

export const currentMovieQuery = (movieId: number) => ({
  queryKey: [`${QueryKeys.MOVIE}${movieId}`, QueryKeys.MOVIES],
  queryFn: async () => {
    return await callCurrentMovieGET(movieId);
  },
  enabled: movieId !== 0,
});
