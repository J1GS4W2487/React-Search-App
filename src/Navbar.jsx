import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
export class Navbar extends Component {
    render(){
      return(
      <>


          <div class="topnav">
            <Link to="/" className="title">PICSEARCH</Link>
            <div class="topnav-right">
            <Link to="/login">User</Link>
               <Link to="/login">Login</Link>
            </div>
          </div>

</>
      )
    }
}

export default Navbar;