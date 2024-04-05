import { Button } from "@mui/material";
import { useCurrentMovieQuery } from "../../commons/hooks/useCurrentMovieQuery";

export const Movie = () => {
  const test = useCurrentMovieQuery(1);
  console.log({ test });

  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};
