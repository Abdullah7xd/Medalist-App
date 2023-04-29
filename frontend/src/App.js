import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import ManageMatches from './components/user/ManageMatches';
import ManageCategories from './components/user/ManageCategories';
import ManagePlayer from './components/user/ManagePlayer';
import ManageTeams from './components/user/ManageTeams';
import ManageTournament from './components/user/ManageTournament';
import Signup from './components/main/Signup';
import User from './components/user';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

          </Route>
          <Route path="user" element={<User />}>
           
            <Route path='managecategories' element={<ManageCategories />} />
            <Route path='Managematches' element={<ManageMatches />} />
            <Route path='manageplayer' element={<ManagePlayer />} />
            <Route path='manageteam' element={<ManageTeams />} />
            <Route path='managetournament' element={<ManageTournament />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
