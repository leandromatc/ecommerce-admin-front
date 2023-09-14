import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Home from "./pages/Home";
import ProductsAdmin from "./components/ProductsAdmin";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/product" element={<ProductsAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
