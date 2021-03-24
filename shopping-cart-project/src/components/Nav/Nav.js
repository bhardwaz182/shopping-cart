import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Nav.css';
import logo from '../images/logo.png';
import cart from '../images/cart.svg';

class Nav extends Component{
    render(){
        return(
            // <div className="container d-flex">
            //     <ul>
            //         <li><img src={logo} alt="sabka bazar"/></li>
            //         <li><Link to="/">Home</Link></li>
            //         <li><Link to="/products" >Products</Link></li>
            //     </ul>
            //     {/* <img src={logo} alt="sabka bazar"/> */}
            //     <div>
            //         <img src={cart} alt="cart"/>
            //     </div>
            // </div>

            <div className="container">
                <nav class="navbar navbar-expand navbar-light bg-light dis-flex">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><img src={logo} alt="logo"/></li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">
                            Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">
                            products
                            </Link>
                        </li>
                    </ul>
                    <div className="cart-section">
                        <span>Sign in</span><span> Register</span>
                        <div><img src={cart} alt="cart" className="cart-image"/>0 items</div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;