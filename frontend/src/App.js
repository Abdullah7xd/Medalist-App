import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
