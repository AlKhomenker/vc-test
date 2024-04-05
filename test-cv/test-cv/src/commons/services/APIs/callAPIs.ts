import { I_Movie } from "../../interfaces/movie";
import { PathAPIs } from "./pathAPIs";
import axios from "axios";

export const callMoviesGET = (): Promise<I_Movie[]> => {
  return axios
    .get(PathAPIs.MOVIES_PATH)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching movie:", error);
      throw error;
    });
};

export const callCurrentMovieGET = (movieId: number): Promise<I_Movie> => {
  return axios
    .get(`${PathAPIs.MOVIE_PATH}${movieId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching movie:", error);
      throw error;
    });
};
