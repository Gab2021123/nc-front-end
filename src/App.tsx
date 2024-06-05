import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtetecRoute from "./components/ProtectedRoute/ProtetecRoute";
import Login from "./features/Login/pages/Login";
import Main from "./features/Main/pages/Main";
import Principal from "./features/Principal/pages/Principal";
import ProductMainList from "./features/ProductsList/pages/ProductMainList";
import Register from "./features/Register/pages/Register";
import ShoppingCart from "./features/ShoppingCart/Pages/ShoppingCart";
import { useAuthStore } from "./store/appStore.ts";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
