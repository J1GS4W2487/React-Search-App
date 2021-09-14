
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import disableBrowserBackButton from 'disable-browser-back-navigation';

import {Switch, Link, Route, withRouter} from 'react-router-dom';
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

function App() {
  disableBrowserBackButton();

  // history.listen((newLocation, action) => {
  //   if (action === "PUSH") {
  //     if (locationChanges) {
  //        // Clone location object and push it to history
  //         history.push({
  //           pathname: newLocation.pathname,
  //           search: newLocation.search
  //         });
  //       }
  //     } else {
  //       // If a "POP" action event occurs, 
  //       // Send user back to the originating location
  //       history.go(1);
  //     }
  //   });
  
  return (
    <>

    <Switch>   
    <Route exact path="/" component = {Login} /> 
    <Route exact path="/search" component = {Search} /> 
 
    <Route exact path="/register" component = {Register} />
    </Switch> 

    </>
  ); 
}

export default App;
