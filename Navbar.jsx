import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainConst } from '../App'

const Navbar = () => {
  let {ShowCart} =useContext(MainConst)
  return (
    <>
    <div className="navbar">
        <p><NavLink to={'/'}>Home</NavLink></p>
        <p>LogIn</p>
        <p>About Us</p>
        <p onClick={ShowCart}>Cart</p>
    </div>
    </>
  )
}

export default Navbar
