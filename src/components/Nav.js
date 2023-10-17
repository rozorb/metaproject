import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <nav>
            <ul className="nav-links karla-regular">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu-page'>Menu</Link></li>
                <li><Link to='/booking-page'>Reservations</Link></li>
                {/* <li><Link to='/temp'>Order Online</Link></li> */}
            </ul>
        </nav>
    )
}