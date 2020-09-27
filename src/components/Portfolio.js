import React, { Component } from 'react';

import PortfolioUi from './portfolio/PortfolioUi';
import * as api from './portfolio/constant/constant';
import axios from 'axios';

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
    return (
      <PortfolioUi
        data={portfolio_data}
      />
    );
  }
}
export default Portfolio;