import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheet/navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {

  const cartSelector = useSelector(state => state.cart)
  // console.log(cartSelector)

  return (
    <nav className='navbar' >
        <span className='store-logo'>REDUX STORE</span>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
        <span className='cartCounter'>
            Cart Items : {cartSelector.length}
        </span>
    </nav>
  )
}

export default Navbar