import ReactDOM from "react-dom/client";
/* import App from "./App.tsx"; */
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./features/Main/pages/Main.tsx";
import ShoppingCart from "./features/ShoppingCart/Pages/ShoppingCart.tsx";
import Login from "./features/Login/pages/Login.tsx";
import Register from "./features/Register/pages/Register.tsx";
import ProductMainList from "./features/ProductsList/pages/ProductMainList.tsx";
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
  {
    path: "/shoppingcart",
    element: <ShoppingCart />,
  },
  { path: "/register", element: <Register /> },
  { path: "/productslist", element: <ProductMainList /> },
];
const router = createBrowserRouter(RoutesObject);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
