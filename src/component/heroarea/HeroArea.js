import React, { Component } from 'react';

import HeroAreaSlid from './HeroAreaSlide';

class HeroArea extends Component {
  componentDidMount(){
    //toLoadJavascriptFunction();
  }
  componentDidUpdate(){
    //toLoadJavascriptFunction();
  }
  render() {
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div id="navibar" className="flexslider js-fullheight">
            <ul className="slides">
              {
                this.props.data && this.props.data.map(heroarea_inner =>
                  <HeroAreaSlid
                    key={heroarea_inner.icon+""+(new Date()).valueOf()}
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

function toLoadJavascriptFunction() {
  const script = document.createElement("script");
  script.src = "/js/main.js";
  document.getElementsByTagName('head')[0].appendChild(script);
}

