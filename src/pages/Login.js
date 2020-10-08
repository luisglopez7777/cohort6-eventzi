import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <form className="login__container">
                {/* <figure>
                    <img src="" alt="perfil" />
                </figure> */}
                <label for="email">
                <input type="text" id="email" name="email" placeholder="Email Address" />
                </label> 

                <label for="password2">
                <input type="text" name="password" placeholder="Password" />
                </label> 
                <div className="login__container-more">
                    <p>Remember me</p>
                    <p className="italic">Forgot Password?</p>
                </div>

                <button>LOGIN</button>

            </form>
            <Link to="/">
                <p>Create a new account</p>
            </Link>

        </div>
    )
}
