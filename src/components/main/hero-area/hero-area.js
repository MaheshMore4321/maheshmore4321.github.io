import React, { Component } from 'react';

import HeroAreaSlid from './hero-area_slide';

class HeroArea extends Component {
  componentDidMount() {
    toLoadJavascriptFunction();
  }
  componentDidUpdate() {
    toLoadJavascriptFunction();
  }
  render() {
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              {
                this.props.data && this.props.data.map(heroarea_inner =>
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
  document.getElementsByTagName('head')[0].appendChild(script);
}