import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <nav>
            <ul className="nav-links karla-regular">
                <li><Link to='/'>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link to='/booking-page'>Reservations</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
        </nav>
    )
}