import React from "react";
import logo from '../images/Logo.png';
// import Home from './Home'
import './style.css';

export default function Frontpage() {
    return (
        <div className='front'>
            <img className="logo" src={logo} alt="logo" />
            <h1 className='main-heading'>SAYLANI WELFARE </h1>
            <p className='paragraph-front'>ONLINE MARKET PLACE</p>
            <a className="getStarted" href="SigninForm.js">
                <input type={"button"} value={"Get Started"}/>
            </a>
            
        </div>
    )
}