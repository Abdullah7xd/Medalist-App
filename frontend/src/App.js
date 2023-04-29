import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import ManageCategories from './components/user/ManageCategories';
import ManageMatches from './components/user/ManageMatches';
import ManagePlayer from './components/user/ManagePlayer';
import ManageTeams from './components/user/ManageTeams';
import ManageTournament from './components/user/ManageTournament';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='managecategories' element={<ManageCategories/>} />
            <Route path='managematches' element={<ManageMatches/>} />
            <Route path='manageplayers' element={<ManagePlayer/>} />
            <Route path='managerteams' element={<ManageTeams/>} />
            <Route path='managetournaments' element={<ManageTournament/>} />
            
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
