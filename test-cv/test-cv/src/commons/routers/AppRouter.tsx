import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MoviesList } from "../pages/MoviesList";
import { Movie } from "../pages/Movie";
import { NotFound } from "../pages/NotFound";
import { PublicPaths, Segments } from "./paths";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${PublicPaths.MOVIES}`} />} />
        <Route path={`/${PublicPaths.MOVIES}`} element={<MoviesList />} />
        <Route
          path={`/${PublicPaths.MOVIE}/:${Segments.MOVIE_ID}`}
          element={<Movie />}
        />
        <Route path={PublicPaths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
};
