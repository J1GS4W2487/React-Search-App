import React,  { Component } from 'react';
import {Link, useHistory,withRouter} from 'react-router-dom';
import './App.css';
import disableBrowserBackButton from 'disable-browser-back-navigation';


class Register extends Component {

 
  
  DATA;

  constructor(props) 
  
  {

    
      super(props);
      this.eventName = this.eventName.bind(this);
      this.eventEmail = this.eventEmail.bind(this);
      this.eventPassword = this.eventPassword.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
  
   
     this.state = {
          name: '',
          email: '',
          password: ''
      }
  }
  

  
    eventName(event) {
      this.setState({ name: event.target.value })
  }

  eventEmail(event) {

      this.setState({ email: event.target.value })
  }


  eventPassword(event) {
      this.setState({ password: event.target.value })
  }  


  handleformvalidation(){

      var name=document.getElementById("name").value;  
      var email=document.getElementById("email").value; 
      var password = document.getElementById("password").value; 

      var letters = /^[A-Za-z]+$/;  

   
           if( name==='' || password==='' || email===''){  

              alert("ALL FIELDS ARE COMPULSORY"); 
              return false; 
              }

      else if(!letters.test(name))   
          {  
           alert('Names should contain Letters only');  
           return false; 
          }  
  
     
          else{
       alert("registeration sucess");
       return true;
 
          } 

  }
  onFormSubmit(event) {
      if (this.handleformvalidation()){
          event.preventDefault();
         
      }
    
  }


  componentDidMount() {
  
      this.DATA = JSON.parse(localStorage.getItem('contact_form'));

      if (localStorage.getItem('contact_form')) {
          this.setState({
                   
              name: this.DATA.name,
              email: this.DATA.email,
           
              password: this.DATA.password
          })
      }

       else {
          this.setState({
              name: '',
              email: '',
              password: ''
          })
      }

 var myData = localStorage.getItem('contact_form');
      console.log(myData);
  
  }

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('contact_form', JSON.stringify(nextState));
  }
  
  loginSubmit = (e) =>{
  
    if (this.handleformvalidation()){
      e.preventDefault();
    }
  }
    
    render() {
  
     
      var logindata = this.state.logindata;
      return (
        <>
        <div className="App">
         
          <form ref="myForm1" className="myForm1" id="formreset1"  onSubmit={this.onFormSubmit}>
          <h2 className="logins">SEARCH REGISTER</h2><br/>
            <input type="text"  id="admin" placeholder="email" className="formField1"  value={this.state.email} onChange={this.eventEmail}/>
            <input type="password" id="password" placeholder="password" className="formField1" value={this.state.password} onChange={this.eventPassword}/>
            <input type="text" id="name" placeholder="Name" className="formField1"  value={this.state.name} onChange={this.eventName}/>
           
            <button type="submit"  onClick={(event)=>this.onFormSubmit(event)} className="myButton">SUBMIT</button>
            <br/>
            <br/>
            <Link to="/search" className="myButton">LOGIN </Link>
          
          </form>
       
        </div>
        </>
      );
    }
}

export default withRouter(Register);