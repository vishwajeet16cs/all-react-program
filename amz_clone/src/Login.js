import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
                    alt=""
                />


            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email "/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button 
                    type="submit"
                    className="login__signin">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button 
                className="login__reg">Create your Account</button>
            </div>
        </div> 
    )
}
