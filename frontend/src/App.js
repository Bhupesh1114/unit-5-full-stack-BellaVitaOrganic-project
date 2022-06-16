
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Login_Signup/Home';
import Login from './components/Login_Signup/Login';
import Signup from './components/Login_Signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/register" element={<Signup />} />
        <Route path="account/login" element={<Login />} />
      </Routes>
 
    </div>
  );
}

export default App;
