import { createBrowserRouter } from "react-router-dom";
import Item from "../components/Item";
const router = createBrowserRouter([
  {
    element: <Item />,
    path: "/",
  },
]);

export default router;
