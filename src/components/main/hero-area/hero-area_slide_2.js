import React, { Component } from 'react';

class HeroAreaSlid_2 extends Component {
  render() {
    return (
      <>
              <li style={{backgroundImage:'url(images/img_bg_2.jpg)'}}>
                  <div class="overlay"></div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div class="slider-text-inner">
                          <div class="desc">
                            <h1>I love building<br/>THINGS!!</h1>
                              <p><a class="btn btn-primary btn-learn" href="https://coderstea.com" target="_blank" rel="noopener noreferrer">View&nbsp;My&nbsp;BlogSite&nbsp;<i class="icon-book"></i></a></p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
      </>
    );
  }
}
export default HeroAreaSlid_2;