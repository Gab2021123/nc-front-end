import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtetecRoute from "./components/ProtectedRoute/ProtetecRoute";
import Login from "./features/Login/pages/Login";
import Main from "./features/Main/pages/Main";
import Principal from "./features/Principal/pages/Principal";
import ProductMainList from "./features/ProductsList/pages/ProductMainList";
import Register from "./features/Register/pages/Register";
import ShoppingCart from "./features/ShoppingCart/Pages/ShoppingCart";
import ProductDetail from "./features/ProductsList/components/ProductDetail/ProductDetail.tsx";
import PostProduct from "./features/PostProduct/pages/PostProduct.tsx";
import ProductsSearch from "./features/ProductsSearch/pages/ProductsSearch.tsx";
import { useAuthStore } from "./store/appStore.ts";
import Contacto from "./features/Contacto/Contacto.tsx";

function App() {
  const { isAuth } = useAuthStore();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/help" element=""></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route element={<ProtetecRoute isAllowed={isAuth} />}>
            <Route path="/principal" element={<Principal />}></Route>
            <Route path="/productlist" element={<ProductMainList />}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
            <Route path="/contact" element={<Contacto />}></Route>
            <Route
              path="productdetail/:productId"
              element={<ProductDetail />}
            ></Route>
            <Route path="/postproduct" element={<PostProduct />}></Route>
          </Route>
          <Route path="/principal/burger" element={<ProductsSearch />}></Route>
          <Route path="/principal/pizza" element={<ProductsSearch />}></Route>
          <Route path="/principal/beef" element={<ProductsSearch />}></Route>
          <Route path="/principal/chiken" element={<ProductsSearch />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
