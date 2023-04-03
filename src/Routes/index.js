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
    // typical path would be similar to: `contribute/quran?project=quran_android
    path: "contribute/:org",
    element: <Home />,
  },
]);

export default router;
