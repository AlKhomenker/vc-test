import { Typography } from "@mui/material";
import { useMoviesQuery } from "../../commons/hooks/useMoviesQuery";
import { ListBox, WrappedBox } from "./styledComponents";
import { Card } from "../../commons/components/Card/TopBar";

export const MoviesList = () => {
  const movies = useMoviesQuery();

  return (
    <WrappedBox>
      <Typography variant="h4">List all Movies </Typography>
      <ListBox>
        {movies.map((item) => {
          return <Card key={item.id} title={item.title} />;
        })}
      </ListBox>
    </WrappedBox>
  );
};
