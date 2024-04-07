import React from 'react'
import PropTypes from 'prop-types'

export default function Login() {
  return (
    <>
    <header>
            <h2 className="logo">logo</h2>
            <nav className="navigation">
                <a href="/">home</a>
                <a href="/">about</a>
                <button className="btnLogin-popup">login</button>
            </nav>
        </header>
        <div className="wrapper">
            <div className="form-box login">
                <h2>login</h2>
                <form action="/">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forget"><label><input type="checkbox"/>Remember Me</label>
                    <a href="/">Forgot Password</a></div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an account?<a href="/" className="registre-link">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

