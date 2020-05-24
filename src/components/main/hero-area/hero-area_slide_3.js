import React, { Component } from 'react';

class HeroAreaSlid_3 extends Component {
  render() {
    return (
      <>
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
export default HeroAreaSlid_3;