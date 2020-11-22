import React, { Component } from 'react';
import * as api from './portfolio/constant/constant';
import axios from 'axios';

import PortfolioUi from './portfolio/PortfolioUi';
class Portfolio extends Component {
  constructor(props){
    super(props)

		this.state = {
			portfolio_data: []
    }
  }

  componentWillMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{
      this.setState({portfolio_data: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
  }

  render() {
    const {portfolio_data} =  this.state;
    //console.log(portfolio_data);
    return (
      <PortfolioUi
        data={portfolio_data}
      />
    );
  }
}
export default Portfolio;