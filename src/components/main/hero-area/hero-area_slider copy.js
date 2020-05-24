import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 

class HeroAreaSlider extends Component {
  constructor(props){
		super(props)

		this.state = {
      heroarea_: []
    }
  }

  componentDidMount(){
		axios.get(api.heroarea_api)
		.then(response =>{ 
      console.log(response);
      this.setState({heroarea_: response.data});
		})
		.catch(error =>{
			console.log(error);
    })
  } 

  render() {
    const {heroarea_} = this.state;
    console.log("heroarea_ :: " + heroarea_);
    return (
      <>
        {
          heroarea_.map(heroarea_data =>
          <li key={heroarea_data.text} style={{backgroundImage:`url(${heroarea_data.backgroundImg})`}}>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>{heroarea_data.headerLine}</h1>
                      <p><a className="btn btn-primary btn-learn" href={heroarea_data.link} target="_blank" rel="noopener noreferrer">{heroarea_data.text}<i className={heroarea_data.icon}></i></a></p>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          </li>)
          }
      </>
    );
  }
}
export default HeroAreaSlider;