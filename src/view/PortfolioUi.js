import React, { Component } from 'react';

import Sidebar from '../component/sidebar/Sidebar';
import Main from './Main';

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