import React from "react";
import './logIn.css'

export default function SignUp() {

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                {/* <div className="underLine"> <hr /></div> */}
            </div>
            <div className="inputs">
                <div className="input">
                    <i class="bi bi-person"></i>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <i class="bi bi-envelope-at"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <i class="bi bi-lock-fill"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="login">
                    Already have an account  <a href="/login">Login</a>
                </div>
                <div className="submitContainer">
                    <div className="submit">
                        <button >Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}