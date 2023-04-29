import React from 'react'
<<<<<<< HEAD

const User = () => {
  return (
    <div>User</div>
=======
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <Outlet />
    </div>
>>>>>>> dec18311da330a355f56dcd405d8f3b651a1b995
  )
}

export default User