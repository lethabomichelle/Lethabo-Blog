import React from "react"
import './homepage.css'
import Navbar from "../navbar/Nav";
import Post from "../Post";

export default function Homepage() {
    return (
        <div className="hero">
            <div className="my-5">
                <div className="p-5 text-center home">
                    <div className="container py-5" style={{ backgroundColor: 'transparent' }}>
                        <p style={{ backgroundColor: 'transparent', marginRight: '25rem' }}>
                            ACTIVE
                        </p>
                        <h1 style={{ backgroundColor: 'transparent', marginRight: '25rem' }} className="emphasis message">Fitness and <br /> Wellness inspo</h1>
                    </div>
                </div>
            </div>
            {/* <div className="box">
                <form role="search" className="searchbox">
                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div> */}
            <Navbar />
            <Post />
        </div>
    )
}