import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { currentMovieQuery } from "../services/query/queryAPIs";
import { I_Movie } from "../interfaces/movie";

export const useCurrentMovieQuery = (movieId: number): I_Movie | null => {
  const { data, isLoading, isError, error } = useQuery(
    currentMovieQuery(movieId)
  );

  const currentMovie = useMemo(() => {
    if (!isLoading) {
      return data;
    }
    return null;
  }, [isLoading, data]);

  useEffect(() => {
    if (isError) {
      //set context error
    }
  }, [isError, error]);

  return currentMovie as I_Movie | null;
};
