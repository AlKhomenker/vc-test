import { useCurrentMovieQuery } from "../../commons/hooks/useCurrentMovieQuery";

export const MoviesList = () => {
  const test = useCurrentMovieQuery(1);
  console.log({ test });

  return <>MoviesListPage</>;
};
