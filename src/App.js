import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Portfolio from './view/Portfolio';
import Undefined from './view/Undefined';
import GenPortfolioConfig from './view/GenPortfolioConfig';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            {/* <Route exact path='/' component={Portfolio} /> */}
            <Route exact path='/undefined' component={Undefined} />
            <Route exact path='/' component={GenPortfolioConfig} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;