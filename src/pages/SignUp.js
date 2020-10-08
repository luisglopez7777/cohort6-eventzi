import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className="signup">

            <form className="signup__container" action="">
                {/* <figure>
                    <img src="" alt="perfil" />
                </figure> */}
                <label for="name">
                    <input type="text" name="name" id="name" placeholder="Name" />
                </label>

                <label form="email">
                <input type="text" name="email" id="email" placeholder="Email Address" />
                </label>

                <label for="password">
                <input type="text" name="password" id="password" placeholder="Password" />
                </label>

                <label for="confirm-password">
                <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                </label>


                <button>SIGN UP</button>

            </form>
        </div>
    )
}
