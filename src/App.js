import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Portfolio from './components/Portfolio';
import GenPortfolioConfig from './components/genportfolioconfig/GenPortfolioConfig';
import modalkava from './components/genportfolioconfig/modalkava';
import FlexibleModal from './components/genportfolioconfig/index';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route exact path='/model' component={modalkava} />
            <Route exact path='/modela' component={FlexibleModal} />
            <Route exact path='/generate_portfolio_config' component={GenPortfolioConfig} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;