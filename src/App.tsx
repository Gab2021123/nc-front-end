import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtetecRoute from "./components/ProtectedRoute/ProtetecRoute";
import Login from "./features/Login/pages/Login";
import Main from "./features/Main/pages/Main";
import Principal from "./features/Principal/pages/Principal";

import Register from "./features/Register/pages/Register";
import ShoppingCart from "./features/ShoppingCart/Pages/ShoppingCart";
import ProductDetail from "./features/ProductsList/components/ProductDetail/ProductDetail.tsx";
/* import PostProduct from "./features/PostProduct/pages/PostProduct.tsx"; */
import { useAuthStore } from "./store/appStore.ts";
import DashboardProduct from "./features/DashboardPrincipal/components/DashboardProduct/DashboardProduct.tsx";

import DashboardPrincipal from "./features/DashboardPrincipal/pages/DashboardPrincipal.tsx";
import ProductsMainList from "./features/ProductsList/components/ProductsMainList/ProductsMainList.tsx";

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
            <Route path="/productlist" element={<ProductsMainList />}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
            <Route
              path="productdetail/:productId"
              element={<ProductDetail />}
            ></Route>
            <Route path="/postproduct" element={<DashboardProduct />}></Route>
            <Route path="/post" element={<DashboardPrincipal />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
