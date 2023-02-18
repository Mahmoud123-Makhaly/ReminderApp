import React from 'react'
import logo from "../logo.svg"
const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
<div className='logo' style={{display:"flex",alignItems:"center"}}>
<img className='nav-img' src={logo} style={{margin:"0 10px"}}/>
<h3>React Facts</h3>
</div>
<h3>React-project1</h3>
    </div>
    </>
  )
}

export default Navbar