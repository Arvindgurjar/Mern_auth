import React from 'react'
import {Outlet } from "react-router-dom";
import Logo from "../images/1.jpg"
import Nav1 from "./Nav1"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                        <img src={Logo} className=' navbar-brand img-fluid rounded' alt="Error"  height="60px" width="20%"/>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav1/>
                        </div>
                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar
