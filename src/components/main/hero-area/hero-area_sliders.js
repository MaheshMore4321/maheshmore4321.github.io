import React, { Component } from 'react';

class HeroAreaSliders extends Component {
  render() {
    return (
      <>
        <li style={{backgroundImage:'url(images/img_bg_1.jpg'}}>
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner js-fullheight">
                        <div class="desc">
                          <h1>Hi! <br/>I'm Mahesh</h1>
                          <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1ygO1kZyoI9UwXcqZMtMcFU3UIzUwVglE/view" target="_blank" rel="noopener noreferrer">Download CV&nbsp;<i class="icon-download4"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
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
                <li style={{backgroundImage:'url(images/img_bg_3.jpg)'}}>
                  <div class="overlay"></div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div class="slider-text-inner">
                          <div class="desc">
                            <h1>Let's have a<br/>Talk!!</h1>
                            <p><a class="btn btn-primary btn-learn" href="#sec_contactme" data-nav-section="contactme">Contact&nbsp;me&nbsp;<i class="icon-briefcase3"></i></a></p>
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
export default HeroAreaSliders;