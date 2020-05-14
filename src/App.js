import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

class App extends Component {
  render() {
    return (
    <div id="sym-page">
      <a href="# " className="js-sym-nav-toggle sym-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
      <Sidebar/>
      <Main/>
    </div>
    );
  }
}

export default App;
