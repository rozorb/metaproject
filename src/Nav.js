import React from "react"
import logo from "./assets/Logo.png"

export default function Nav() {
    return(
        <nav>
            <img src={logo} alt="Logo"/>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}