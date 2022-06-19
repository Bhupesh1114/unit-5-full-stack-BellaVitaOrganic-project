import react from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Comp/HomePage/HomePage";
import { Cartpage } from './Comp/payment/Cartpage';
import { Information } from './Comp/payment/Information';
import Navbar from "../src/Comp/Navbar/Navbar"
import Footer from "../src/Comp/Footer/Footer";
import Products from '../src/Comp/Products/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/address" element={<Information />} />
      
        <Route path="/products/:category" element={<Products />} />
        
        <Route path="*" element={<HomePage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
