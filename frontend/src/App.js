import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
<<<<<<< HEAD
import Signup from './components/main/Signup';
import ManageCategories from './components/user/ManageCategories';
import ManageMatches from './components/user/ManageMatches';
import ManagePlayer from './components/user/ManagePlayer';
import ManageTeams from './components/user/ManageTeams';
import ManageTournament from './components/user/ManageTournament';
=======
import ManageMatches from './components/user/ManageMatches';
import ManageCategories from './components/user/ManageCategories';
import ManagePlayer from './components/user/ManagePlayer';
import ManageTeams from './components/user/ManageTeams';
import ManageTournament from './components/user/ManageTournament';
import Signup from './components/main/Signup';
import User from './components/user';
>>>>>>> dec18311da330a355f56dcd405d8f3b651a1b995

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Navigate to="/home" />} />
=======
          <Route path='/' element={<Navigate to="/main/home" />} />
>>>>>>> dec18311da330a355f56dcd405d8f3b651a1b995
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
<<<<<<< HEAD
            <Route path='managecategories' element={<ManageCategories/>} />
            <Route path='managematches' element={<ManageMatches/>} />
            <Route path='manageplayers' element={<ManagePlayer/>} />
            <Route path='managerteams' element={<ManageTeams/>} />
            <Route path='managetournaments' element={<ManageTournament/>} />
            
          </Route>

=======

          </Route>
          <Route path="user" element={<User />}>
           
            <Route path='managecategories' element={<ManageCategories />} />
            <Route path='Managematches' element={<ManageMatches />} />
            <Route path='manageplayer' element={<ManagePlayer />} />
            <Route path='manageteam' element={<ManageTeams />} />
            <Route path='managetournament' element={<ManageTournament />} />

          </Route>
>>>>>>> dec18311da330a355f56dcd405d8f3b651a1b995

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
