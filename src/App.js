import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
    <Route path='home' element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
