import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router' 

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

class App extends Component { 
  render() { 
    return (
      <div id="sym-page">
        <a href="# " className="js-sym-nav-toggle sym-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <Sidebar/>
        <Main/>
        <Router history = {browserHistory}>
          <Route path = "/undefined/" component = {Main}></Route>
        </Router>    
      </div>
    );
  }
}
export default App;