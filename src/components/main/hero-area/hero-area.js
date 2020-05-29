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
 
  componentWillMount(){
    axios.get(api.heroarea_api)
    .then(response => {
      this.setState({heroarea_: response.data});
    })
    .catch(error =>{
      console.log("error :: " + error);
    })
  } 

  render() {
    const {heroarea_} = this.state; 
    const numbers = [false, false, false];
    const doubled = numbers.map((number) => number);
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            {!heroarea_.length && this.setState({heroarea_:doubled})}
            {
              heroarea_.map(heroarea_inner => 
                <HeroAreaSlid  
                  data={heroarea_inner}
                />
              )
            }
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default HeroArea;