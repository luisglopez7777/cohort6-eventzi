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

            <nav>
                <ul><input type="text" placeholder="Search event" /></ul>
                <ul>Sign up</ul>
                <ul>Log in</ul>
            </nav>

        </header>
    )
}
