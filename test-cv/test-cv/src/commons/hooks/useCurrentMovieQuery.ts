import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { currentMovieQuery } from "../services/query/queryAPIs";
import { I_Movie } from "../interfaces/movie";
import { useErrorContext } from "../context/useErrorContext";

export const useCurrentMovieQuery = (movieId: number): I_Movie | null => {
  const { setError } = useErrorContext();
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
      setError(error);
    }
  }, [isError, error, setError]);

  return currentMovie as I_Movie | null;
};
