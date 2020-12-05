import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Portfolio from './view/Portfolio';
import GenPortfolioConfig from './view/GenPortfolioConfig';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route exact path='/generate_portfolio_config' component={GenPortfolioConfig} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;