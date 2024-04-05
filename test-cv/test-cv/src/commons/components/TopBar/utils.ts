import { PublicPaths } from "../../routers/paths";

type TopBarPathsParams = {
  path: string;
  title: string;
};

export const TopBarPaths: TopBarPathsParams[] = [
  { path: PublicPaths.MOVIES, title: "List" },
  { path: PublicPaths.MOVIE, title: "Movie" },
];
