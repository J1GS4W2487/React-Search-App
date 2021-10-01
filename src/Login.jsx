import React,{Component} from "react";
import {Link,Redirect, useHistory,withRouter} from 'react-router-dom';
import disableBrowserBackButton from 'disable-browser-back-navigation';

const Login =() => {  
      // disableBrowserBackButton();
      
      const history= useHistory();
        const jig = JSON.parse(window.localStorage.getItem('contact_form'));
      //   function cookies(name,value,days){
      //   let date = new Date();
      //   date.setTime(date.getTime()=(day*24*60*60*1000));
      //   const expires = "experies="+ value+";"+expires+";path=/"

      // }
      
        const loginVal = () => {
     
        
            var name2 = jig.email;
            var password2 = jig.password;
            console.log(name2); 
            var email1 = document.getElementById("email").value;
            var password1 = document.getElementById("password").value;
          
       if(email1===name2 && password1===password2){
    
        this.props.history.push({
          pathname: '/Search',
        
        }
        );
        }
        else{
          window.alert('Please enter valid credentials')

        }
       }
       
      
        return (

    <>
    <div className="App">
 
    <form ref="myForm1" className="myForm1" id="formreset1" autoComplete="off">
    <h2 className="logins"> SEARCH LOGIN</h2><br/>
    <input type="text"  id="email" placeholder="email" className="formField1" />
    <input type="password" id="password" placeholder="password" className="formField1" />
    <button onClick={loginVal} className="myButton">SUBMIT</button> 
    <br/> <br/><p className="logins">New User?</p>  <Link to="/register" className="myButton">REGISTER </Link>
    </form>
    
    </div>
    </>
        )
    }  


export default withRouter(Login);