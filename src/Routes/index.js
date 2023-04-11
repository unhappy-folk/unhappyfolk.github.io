import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // placeholder
    path: "contribute",
    element: <Home />,
  },
  {
    // a typical path would be similar to: `contribute/quran;quran_android
    path: "contribute/:fullRepoName",
    element: <Home />,
  },
]);

export default router;
