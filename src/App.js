import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Portfolio from './components/Portfolio'
import GenPortfolioConfig from './components/genportfolioconfig/GenPortfolioConfig';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route path='/generate_portfolio_config' component={GenPortfolioConfig} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;