import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const NavbarComp = () => {

     const[expanded,setExpanded] = useState(true);

     const navToggle = () => {
       setExpanded(expanded ? false : true);
     }

    const closeNav = () => {
      setExpanded(false);
    }



    return (
        <div class="container">
           <nav class="navbar navbar-expand-sm navbar-dark text-center Navbar " onClick={expanded} >
             <div class="container-fluid">
            <Link class="navbar-brand nav-link" to="/" >L A V I S H</Link>
              
              <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    // aria-expanded="true"
                    >
                    <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" onClick={navToggle} id="navbarToggler" >
                <ul class="navbar-nav ms-auto" 
                // data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                 >
                       <li class="nav-link"  onClick={closeNav} >
                         <Link to="/About">About</Link>
                       </li>
                        <li class="nav-link" onClick={closeNav} >
                        <Link to="/Education">Education</Link>
                        </li>
                        <li class="nav-link" onClick={closeNav} >
                        <Link to="/Projects">Projects</Link>
                        </li>
                        <li class="nav-link" onClick={closeNav} >
                        <Link to="/Contacts">Contacts</Link>
                        </li>

                     
                  </ul>
               </div>
              </div>
           </nav>
     </div>
   
    )
}

export default NavbarComp
