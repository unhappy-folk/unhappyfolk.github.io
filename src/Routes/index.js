import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Contribute, { loader } from "../Components/Contribute";

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
    element: <Contribute />,
    loader: loader,
  },
]);

export default router;
