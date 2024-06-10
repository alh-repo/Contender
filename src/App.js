import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Sports from './pages/Sports';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Sports" element={<Sports/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
