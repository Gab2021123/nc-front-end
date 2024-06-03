import ReactDOM from "react-dom/client";
/* import App from "./App.tsx"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./features/Main/pages/Main.tsx";
import ShoppingCart from "./features/ShoppingCart/Pages/ShoppingCart.tsx";
import Login from "./features/Login/pages/Login.tsx";
import Register from "./features/Register/pages/Register.tsx";
import ProductMainList from "./features/ProductsList/pages/ProductMainList.tsx";
import Principal from "./features/Principal/pages/Principal.tsx";
import ProtetecRoute from "./components/ProtectedRoute/ProtetecRoute.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/help" element=""></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route element={<ProtetecRoute isAllowed={true} />}>
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/productlist" element={<ProductMainList />}></Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
