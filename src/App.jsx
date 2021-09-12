
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Switch, Link, Route} from 'react-router-dom';
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>

    <Switch>   
    <Route exact path="/" component = {Login} /> 
    <Route exact path="/search" component = {Search} /> 
    <Route exact path="/" component = {Login} /> 
    <Route exact path="/register" component = {Register} />
    </Switch> 

    </>
  );
}

export default App;
