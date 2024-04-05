import { Button } from "@mui/material";
import { useMoviesQuery } from "../../commons/hooks/useMoviesQuery";

export const MoviesList = () => {
  const test = useMoviesQuery;
  console.log({ test });

  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};
