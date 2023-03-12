import React from "react";
import './style.css';
import Button from 'react-bootstrap/Button';

export default function SigninForm() {
    return (
        <div className='SigninForm'>
            <h1 className='main-heading'>SAYLANI WELFARE </h1>
            <p className='paragraph-front'>ONLINE MARKET PLACE</p>
        </div>
    )
}
function Form(props) {
    const isLoggedIn = props.isLoggedIn;
    if (Saller) {
        return (
            <form>
                <TextField id="username" label="User name" variant="User name" /><br />
                <TextField id="contact" label="Contact" variant="Contact" /><br />
                <TextField id="email" label="Email" variant="Email" /><br />
                <TextField id="password" label="Password" variant="Password" /><br />

                <FormControlLabel value="Purchase" control={<Radio />} label="Purchase" />
                <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
                <input type={"button"} value={"Sign Up"}/>
            </form>
        );
    }
    return (
        <form>
            <TextField id="username" label="User name" variant="User name" /><br />
            <TextField id="email" label="Email" variant="Email" /><br />
            <TextField id="password" label="Password" variant="Password" /><br />

            <FormControlLabel value="Purchase" control={<Radio />} label="Purchase" />
            <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
            <input type={"button"} value={"Sign In"}/>

        </form>
    );
}