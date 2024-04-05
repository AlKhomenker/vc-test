import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { moviesQuery } from "../services/query/queryAPIs";
import { I_Movie } from "../interfaces/movie";

export const useMoviesQuery = (): I_Movie[] => {
  const { data, isLoading, isError, error } = useQuery<I_Movie[]>(
    moviesQuery()
  );

  const movies = useMemo(() => {
    if (!isLoading) {
      return data;
    }
    return [];
  }, [isLoading, data]);

  useEffect(() => {
    if (isError) {
      //set context error
    }
  }, [isError, error]);

  return movies as I_Movie[];
};
