import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetail from "./pages/MovieDetail";
import TVPage from "./pages/TVPage";
import TVDetail from "./pages/TVDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies/:id", element: <MovieDetail /> },
      { path: "explore/tv", element: <TVPage /> },
      { path: "explore/tv/:id", element: <TVDetail /> },
    ],
  },
]);

export default router;
