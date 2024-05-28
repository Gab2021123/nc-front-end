import ReactDOM from "react-dom/client";
/* import App from "./App.tsx"; */
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./features/Main/pages/Main.tsx";
import Login from "./features/Login/pages/Login.tsx";
import Register from "./features/Register/pages/Register.tsx";
const RoutesObject: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/help",
    element: "",
  },
  { path: "/register", element: <Register /> },
  { path: "/carBuy", element: "" },
];
const router = createBrowserRouter(RoutesObject);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
