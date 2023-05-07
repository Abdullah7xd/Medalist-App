import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../main/Navbar'

const User = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default User