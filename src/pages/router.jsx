
import { createBrowserRouter } from "react-router-dom";

import { Single } from "./pages/single.jsx"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    path: 'id',
element: <Single />,
  },
]);
