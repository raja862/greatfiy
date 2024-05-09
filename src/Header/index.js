import React from "react"
import { NavLink } from "react-router-dom"

import './Header.css'
const Header=()=>{

    return(<div className="header">
    
   

<nav className="navbar navbar-expand-lg navbar-light bg-ligh">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink style={{color:"green",fontWeight: "bolder", fontSize: "30px" ,fontStyle:"italic"}} className="nav-item nav-link" to="/employee/add" id="zoom">ADD EMPLOYEE</NavLink>
  
    </div>
  </div>
</nav>

  
    </div>)
}
export default Header