import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/static/logo-white.svg'

export default function NavBar() {
    return (
        <header>
            <div className="header-left">
                <ul>
                    <Link to="/">
                        <figure>
                            <img className="header__img" src={logo} alt="Platzi Video" />
                        </figure>
                    </Link>
                </ul>

                <ul>
                    <Link to="/">
                        <h4>EVENTZI</h4>
                    </Link>
                </ul>
            </div>

            <nav>
                <ul><input type="text" placeholder="Search event" /></ul>
                <Link to="/">
                    <ul>Sign up</ul>
                </Link>

                <Link to="/login">
                    <ul>Log in</ul>
                </Link>
            </nav>

        </header>
    )
}
