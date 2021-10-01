import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route, useHistory, withRouter} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
const Navbar =()=> {
  const history= useHistory();
 
   
      const logout=()=>{
        localStorage.clear()
        history.push('/')
      }
      return(
      <>


          <div class="topnav">
            <Link to="/" className="title">PICSEARCH</Link>
            <div class="topnav-right">
     
               <button onclick={logout()}>Logout</button>
            </div>
          </div>

</>
      )
    }


export default withRouter(Navbar);