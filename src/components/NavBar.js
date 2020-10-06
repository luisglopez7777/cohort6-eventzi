import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <Link className="logo" to="/">
                <figure>
                    {/* <img className="header__img" src={logo} alt="Platzi Video" /> */}
                </figure>
                <h4>EVENTZI</h4>
            </Link>

            <div className="header__menu">
                <input type="text" placeholder="Search event" />

                <h4>Sign up</h4>
                <h4>Log in</h4>
            </div>

        </header>
    )
}
