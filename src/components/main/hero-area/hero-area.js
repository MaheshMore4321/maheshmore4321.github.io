import React, { Component } from 'react';

import HeroAreaSlider from './hero-area_slider'
import HeroAreaSliders from './hero-area_sliders'

class HeroArea extends Component {
  render() {
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <HeroAreaSliders/>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default HeroArea;