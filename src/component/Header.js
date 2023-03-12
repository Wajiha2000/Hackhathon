import React from "react";
import { GrNotification } from "react-icons/fa";
import { GrLocation } from "react-icons/fa";
import { BsCart4 } from "react-icons/fa";
export function  Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h1 className='main-heading'>SAYLANI WELFARE </h1>
                <p className='paragraph-front'>ONLINE MARKET PLACE</p>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <BsCart4/> 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <GrLocation/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <GrNotification/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
