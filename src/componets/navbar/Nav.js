import React from "react";
import './nav.css'

export default function Navbar() {
    return (
        <div className="nav">
            <ul>
                <li className="a"><a href="#">Latest</a></li>
                <li className="a"><a href="#">Body</a></li>
                <li><a href="#">Mind</a></li>
                <li><a href="#">Community</a></li>
            </ul>

        </div>
    )
}