import React, { useState } from "react";
import './logIn.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.BACKEND_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }).catch(e => console.log(e))
    }

    return (
        <div className="logincontainer">
            <div className="header">
                <div className="text">Login</div>
                {/* <div className="underLine"> <hr /></div> */}
            </div>
            <div className="inputs">
                <div className="input">
                    <i class="bi bi-envelope-at"></i>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                </div>
                <div className="input">
                    <i class="bi bi-lock-fill"></i>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                </div>
                <div className="login">
                    Forgot Password  <a href="/">Click Here</a>
                </div>
                <div className="submitContainer">
                    <div className="submit">
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}