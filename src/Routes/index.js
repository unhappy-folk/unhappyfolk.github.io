import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/DemoPage";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "projects",
    element: <Demo />,
  },
  {
    path: "projects/:org",
    element: <Demo />,
  },
  {
    path: "projects/:org/:project",
    element: <Demo />,
  },
]);

export default router;
