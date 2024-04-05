import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MoviesList } from "../../pages/MoviesList/MoviesList";
import { Movie } from "../../pages/Movie/Movie";
import { NotFound } from "../../pages/NotFound/NotFound";
import { PublicPaths, Segments } from "./paths";
import { Root } from "../../pages/Root/Root";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Root}>
          <Route index element={<Navigate to={`/${PublicPaths.MOVIES}`} />} />
          <Route path={`/${PublicPaths.MOVIES}`} element={<MoviesList />} />
          <Route
            path={`/${PublicPaths.MOVIE}/:${Segments.MOVIE_ID}`}
            element={<Movie />}
          />
        </Route>
        <Route path={PublicPaths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
};
