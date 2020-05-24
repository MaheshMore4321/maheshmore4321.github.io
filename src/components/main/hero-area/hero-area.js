import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 

import HeroAreaSlid from './hero-area_slide'

class HeroArea extends Component {
  constructor(props){
		super(props)

		this.state = {
      heroarea_: []
    }
  }

  componentDidMount(){
		axios.get(api.heroarea_api)
		.then(response =>{
      this.setState({heroarea_: response.data});
      this.setState({flag: true});
		})
		.catch(error =>{
			console.log(error);
    })
  } 

  render() {
    let {heroarea_} = this.state; 
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <HeroAreaSlid
                data = {heroarea_[0]}
              />
              <HeroAreaSlid
                data = {heroarea_[1]}
              />
              <HeroAreaSlid
                data = {heroarea_[2]}
              />
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default HeroArea;