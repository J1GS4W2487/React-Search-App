  
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

export class Login extends Component {
 
      validation1(){  
        var admin=document.getElementById("admin").value;  
        var password=document.getElementById("password").value;  
    
        if(admin==='' || password===''){  
        alert("Please enter all credentials"); 
        }  
        else if (admin==='admin123' && password==='admin'){
      
            window.location.href = "/search";
            return <Link to = "/search"></Link>
        }
        else{
            alert("Invalid Credentials") 
        }      
         }  
      loginSubmit = (e) =>{
  
        if (this.validation1()){
          e.preventDefault();
        }
      }
      
      render() {
      
        return (
          <>
          <div className="App">
           
            <form ref="myForm1" className="myForm1" id="formreset1">
            <h2 className="logins"> SEARCH LOGIN</h2><br/>
              <input type="text"  id="admin" placeholder="email" className="formField1" />
              <input type="password" id="password" placeholder="password" className="formField1" />
              <button onClick={(e)=>this.loginSubmit(e)} className="myButton">SUBMIT</button> 
              <br/> <br/><p className="logins">New User?</p><button  className="myButton">Register</button>
            </form>
         
          </div>
          </>
        );
      }
}

export default Login;
