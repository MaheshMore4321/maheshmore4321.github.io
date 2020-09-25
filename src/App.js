import React, { Component } from 'react';

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

import * as api from './components/constant/constant';
import axios from 'axios';

class App extends Component {
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
      <div id="sym-page">
        <a href="# " className="js-sym-nav-toggle sym-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <Sidebar
          data={portfolio_data.sidebar}
        />
        <Main
          data={portfolio_data}
        />
      </div>
    );
  }
}
export default App;