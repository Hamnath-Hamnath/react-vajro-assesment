import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import {Routes, Route} from 'react-router-dom'
import  Product  from "./components/Product.jsx";
import SpecificProduct from "./components/SpecificProduct";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<SpecificProduct/>} />
        <Route path="/cart">
          <Route index element={<Cart/>} />
          <Route path=':id' element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  );
}
