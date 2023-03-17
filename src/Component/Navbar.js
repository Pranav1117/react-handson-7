import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css';


function NavBar() {
  return (
    <div className='nav'>
        
<Link to={"/"} className='nav__child'>
<p>Home</p>  

</Link>
<Link to={"/student"} className='nav__child'>
<p>Student</p>  

</Link>
<Link to={"/contactUs"} className='nav__child'>
<p>Contact Us</p>  

</Link>

    </div>
  )
}

export default NavBar