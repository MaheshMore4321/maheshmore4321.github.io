import React, { Component } from 'react';

import Sidebar from './sidebar/sidebar'
import Main from './main/main'

class PortfolioUi extends Component {
  render() {
    return (
      <div id="sym-page">
        <a href="# " className="js-sym-nav-toggle sym-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <Sidebar
          data={this.props.data && this.props.data.sidebar}
        />
        <Main
          data={this.props.data && this.props.data}
        />
      </div>
    );
  }
}
export default PortfolioUi;