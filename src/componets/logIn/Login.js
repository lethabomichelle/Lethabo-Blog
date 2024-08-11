import React, { useState } from "react";
import './logIn.css'

export default function Login() {
    const [userEmail, setUserEmail] = useState("");
    const [PassWord, setPassword] = useState("");

    return (
        <div className="logincontainer">
            <div className="header">
                <div className="text">Login</div>
                {/* <div className="underLine"> <hr /></div> */}
            </div>
            <div className="inputs">
                <div className="input">
                    <i class="bi bi-envelope-at"></i>
                    <input type="email" placeholder="Email" onChange={(e) => { setUserEmail(e.target.value); }} />
                </div>
                <div className="input">
                    <i class="bi bi-lock-fill"></i>
                    <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
                </div>
                <div className="login">
                    Forgot Password  <a href="/">Click Here</a>
                </div>
                <div className="submitContainer">
                    <div className="submit">
                        <button >Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}