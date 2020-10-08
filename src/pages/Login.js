import React from 'react'

export default function Login() {
    return (
        <div className="login">
            <form className="login__container">
                <figure>
                    <img src="" alt="perfil" />
                </figure>
                <input type="text" name="email" placeholder="Email Address" />
                <input type="text" name="password" placeholder="Password" />
                <div className="login__container-more">
                    <p>Remember me</p>
                    <p>Forgot Password?</p>
                </div>
            </form>

        </div>
    )
}
