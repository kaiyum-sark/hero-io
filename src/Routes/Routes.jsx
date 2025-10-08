import { createBrowserRouter } from "react-router";
import MainRoot from "../Layouts/MainRoot";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainRoot,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
