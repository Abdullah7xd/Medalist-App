import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Golden Leagues</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <NavLink class="nav-link" aria-current="page" to="/main/home">Home</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/main/Signup">Signup</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/main/Login">Login</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link"to="/user">User</NavLink>
        </li>
      </ul>
      <span class="navbar-text">
        
      </span>
    </div>
  </div>
</nav>
  )
}

export default Navbar