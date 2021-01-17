import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="login">
          <Link to='/login'>
            <img id='login' src="./assets/user-login-icon-14.png" height='75px' width='75px'/>
          </Link>
          <Link to='/signup'>
            <img id='signup' src="./assets/signup.png" height='75px' width='75px'/>
          </Link>
      {/* <a className="login" onClick={this.togglePopup} >
              Login / Create Account
            {this.state.showPopup ?  <Popup closePopup={this.togglePopup} />  
  : null  */}
    </div>  
  )};
  
  export default NavBar;