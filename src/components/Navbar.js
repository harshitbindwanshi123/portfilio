import React from 'react'
import logo from '../images/drdo.png'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<div className='navbar'>
<img src={logo} alt="hello" className='logo' ></img>
<ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/aboutus'>About Me</Link> </li>
    <li><Link to='/skill'>Skills</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/contact'>Contact Me</Link></li>
</ul>

</div>

    </div>
  )
}

export default Navbar