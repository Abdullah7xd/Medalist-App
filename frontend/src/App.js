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

import Signup from './components/main/Signup';
import User from './components/user';
import ManageScores from './components/user/ManageScores';
import UserProfile from './components/user/UserProfile';
import ManageTournament from './components/user/ManageTournament';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position='top-center' />
        <Routes>
          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path='managecategories' element={<ManageCategories />} />
            <Route path='managetournament' element={<ManageTournament />} />
            <Route path='Managematches' element={<ManageMatches />} />
            <Route path='manageplayer' element={<ManagePlayer />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='manageteam' element={<ManageTeams />} />
            <Route path='managetournament' element={<ManageTournament />} />
            <Route path='userprofile' element={<UserProfile />} />
            <Route path='managescores' element={<ManageScores/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
