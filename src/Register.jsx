import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class Register extends Component {
 
    
    render() {
    
      return (
        <>
        <div className="App">
         
          <form ref="myForm1" className="myForm1" id="formreset1">
          <h2 className="logins">SEARCH LOGIN</h2><br/>
            <input type="text"  id="admin" placeholder="email" className="formField1" />
            <input type="password" id="password" placeholder="password" className="formField1" />
            <input type="text" id="name" placeholder="Name" className="formField1" />
       
            <button onClick={(e)=>this.loginSubmit(e)} className="myButton">SUBMIT</button>  
          </form>
       
        </div>
        </>
      );
    }
}

export default Register;

