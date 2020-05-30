import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 
import HeroAreaSlid from './hero-area_slide'

class HeroArea extends Component {
  constructor(props){
		super(props)

		this.state = {
      heroarea_: [],
      loaded: false
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
  componentDidMount() {
    toLoadJavascriptFunction();
  }
  componentDidUpdate() {
    toLoadJavascriptFunction();
  }

  render() {
    const {heroarea_} = this.state;
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            {
              heroarea_.map(heroarea_inner => 
                <HeroAreaSlid  
                  key={heroarea_inner.icon}
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

function toLoadJavascriptFunction(){
  const script = document.createElement("script");
  script.src = "/js/main.js";
  //when the script loads, we're ready to go, so change state
  script.onload = (function(){ 
    this.setState({loaded: true}) 
  }).bind(this);
  document.getElementsByTagName('head')[0].appendChild(script);
}