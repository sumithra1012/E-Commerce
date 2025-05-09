import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Home from './home';
import Products from './Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;