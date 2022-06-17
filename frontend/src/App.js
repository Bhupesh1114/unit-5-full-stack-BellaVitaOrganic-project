import react from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Comp/HomePage/HomePage";
import { Cartpage } from './Comp/payment/Cartpage';
import { Information } from './Comp/payment/Information';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/address" element={<Information />} />
    </Routes>
  );
}

export default App;
