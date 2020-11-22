import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Portfolio from './components/Portfolio';
import PortfolioUi from './components/portfolio/PortfolioUi';
import GenPortfolioConfig from './components/genportfolioconfig/GenPortfolioConfig';

// import * as api from './components/portfolio/constant/constant';
// import axios from 'axios';

class App extends Component {
  // constructor(props){
  //   super(props)

	// 	this.state = {
	// 		portfolio_data: []
  //   }
  // }

  // componentWillMount(){
	// 	axios.get(api.JSON_FILE_DATA)
	// 	.then(response =>{
  //     this.setState({portfolio_data: response.data});
	// 	})
	// 	.catch(error =>{
	// 		console.log(error);
	// 	})
  // }

  render() {
    //const {portfolio_data} =  this.state;
    return (
      <Router>
        <>
          <Switch>
            {/*<Route
              exact path='/view' component={PortfolioUi} />
              render={() => ( <PortfolioUi data={portfolio_data}/> )}
            />*/}
            <Route exact path='/' component={Portfolio} />
            <Route exact path='/generate_portfolio_config' component={GenPortfolioConfig} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;