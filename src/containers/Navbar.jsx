import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
/**
 * Create NavBar Container
 */
 class NavBar extends Component{
 	render(){
 		return (
 			<nav className="nav has-shadow">
 			<div className="container">
 			<div className="nav-left">
 			<Link to="/" className="nav-item">
 			  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
 			</Link>
 			</div>
 			<span className="nav-toggle">
 			<span></span>
 			<span></span>
 			<span></span>
 			</span>

 			<div className="nav-right nav-menu">
 			<Link to="/" className="nav-item">
 			Home
 			</Link>
 			<Link to="/about" className="nav-item">
 			About us
 			</Link>
 			<span className="nav-item">
 			<Link to="cart" className="button is-success is-outlined" >
 			<span className="icon">
 			<i className="fa fa-shopping-cart" aria-hidden="true"></i>
 			</span>
 			<span className="tag is-light">0</span>
 			</Link>
 			<Link to="wishlist" className="button is-danger is-outlined">
 			<span className="icon">
 			<i className="fa fa-heart" aria-hidden="true"></i>
 			</span>
 			<span className="tag is-light">0</span>
 			</Link>
 			</span>

 			<span className="nav-item">
 			<a className="button" >
 			<span>Login</span>
 			</a>
 			<a className="button is-info">
 			<span>Register</span>
 			</a>
 			</span>
 			</div>
 			</div>
 			</nav>
 			)
 	}
 }
/**
 * Insert Props Into Component
 */
 const stateProps = (state) => {
 	return { 

 	}
 }

 export default connect(stateProps)(NavBar)