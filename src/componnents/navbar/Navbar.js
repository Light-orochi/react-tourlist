import React from 'react'
import logo from '../../logo.svg';
import  './navbar.scss';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <img src={logo} alt="our logo site"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="" style={{ textDecoration:'none'}} href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                    <a className="" style={{ textDecoration: 'none'}} href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="" style={{ textDecoration: 'none'}} href="/">Tours</a>
                </li>
                
                
                </ul>
            
            </div>
</nav>
    );
}
