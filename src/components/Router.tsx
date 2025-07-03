import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Router;