import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>HostelHub</h1></a>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">{props.names}</label>
        </div>
      </div>
      
    </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Complaints</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Mess</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>            
          </ul>          
        </div>
    </nav>
    </div>
  )
}

