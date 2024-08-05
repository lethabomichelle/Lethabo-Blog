import React from "react";
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Navbar() {
    return (

        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">
                        <li><a href="/" className=" px-2 ">Latest</a></li>
                        {/* <li><a href="/" className=" px-2 ">Body</a></li>
                        <li><a href="/" className=" px-2 ">Mind</a></li>
                        <li><a href="/" className=" px-2 ">Community</a></li> */}
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div >
                        <a href="/write-blog" style={{ fontSize: '24px' }} >
                            Write
                            <i className="bi bi-pencil-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header >

    )
}