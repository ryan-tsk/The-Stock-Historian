import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/stocks"> Stocks </Link>
      <Link to="/crypto"> Crypto </Link>
    </div>
  )
}

export default NavBar