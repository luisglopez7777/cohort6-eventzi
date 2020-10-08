import React from 'react'

export default function SignUp2() {
    return (
        <div className="signup2">
            <div className="signup2__left">
                <figure>
                    <img src="" alt="user-photo" />
                </figure>

                <form className="register-form">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="company" placeholder="Company" />
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="text" name="password" placeholder="Password" />
                    <input type="text" name="password-copy" placeholder="Confirm Password" />
                    <button type="submit" className="signup2-btn">SIGN UP</button>
                </form>
            </div>


            <div className="signup2__right">
                <button className="button-fb">Sign up with Facebook</button>

                <button className="button-google">Sign up with Google</button>
            </div>
        </div>
    )
}
