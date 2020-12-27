import React, { Component } from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

import HeroAreaSlid from './HeroAreaSlide';

class HeroArea extends Component {
  render() {
    let index = 1;
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div id="navibar" className="flexslider js-fullheight">
            <ul className="slides">
              {
                this.props.data && this.props.data.map(heroarea_inner =>
                  <HeroAreaSlid
                    id={index}
                    key={index++}
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
