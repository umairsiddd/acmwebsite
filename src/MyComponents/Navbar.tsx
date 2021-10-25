import React from 'react'
import './Navbar.css'
import logo from '../images/acm.svg'
import codercup from '../images/codercup.jpg';
const Navbar = () => {
    return (
        <>
        <nav>
          <img className="logosize" src={logo} alt=""/>
      <ul className="nav">
        <li>
          <a className="nav-link active" aria-current="page" href="./Header1.tsx">Home</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href="../images/codercup.jpg">Our Team</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href="../images/ACMDP.jpg">Events</a>
        </li>
         <li>
          <a className="nav-link active" aria-current="page" href={codercup}>CodersCup</a>
        </li>
        
        
       
       
      </ul>
      </nav>
      

</>
    )
}

export default Navbar
