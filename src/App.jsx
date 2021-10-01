
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import disableBrowserBackButton from 'disable-browser-back-navigation';

import {Switch, Link, Route, useHistory, withRouter} from 'react-router-dom';
import Search from "./Search";
import Login from "./Login";

function App() {



  
  const history= useHistory();
  var currentPathname = null;
  var  currentSearch = null;
    history.listen((newLocation, action) => {
      if (action === "PUSH") {
        if (
           newLocation.pathname !== currentPathname ||
          newLocation.search !== currentSearch
        ) {

          currentPathname = newLocation.pathname;
          currentSearch = newLocation.search;

          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search
          });
        }
      } else {

        history.go(1);
      }
    });
  
  
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
