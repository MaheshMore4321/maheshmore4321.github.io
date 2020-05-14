import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
            <section class="sym-experience" data-section="education">
        <div class="sym-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Academics</span>
              <h2 class="sym-heading animate-box">Education</h2>
            </div>
          </div>
          <div class="row" style={{margintop:'20px'}}>
            <div class="col-md-12">
            <div class="timeline-centered">
              <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div class="timeline-entry-inner">
                  <div class="timeline-icon color-3">
                    <i class="icon-pen2"></i>
                  </div>
                  <div class="timeline-label" style={{padding:'0px'}}>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne" style={{border:'none'}}>
                        <h4 class="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseEduOne" aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                            <p style={{margin:'0'}}><b>Bachelor of Enginnering</b>&nbsp;-&nbsp;<b>Electronics Engineering</b></p>
                            <p style={{margin:'0'}}><b>Shree L.R.Tiwari College of Engineering</b></p>
                            <p style={{margin:'0'}}><b>Mumbai University</b></p>
                            <p style={{margin:'0'}}><b>2015 - 2019</b></p>    
                          </a>
                        </h4>
                      </div>
                      <div id="collapseEduOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height:'0px'}}>
                        <div class="panel-body">
                          <div class="row">
                            <p style={{lineheight:'1.4', margin:'0'}}>Graduate with Distinction<br/>
                          participate in various event as Aakash Tab dev &amps; E-yantra which organize by Bombay-IIT, also coordinate college fest- Ustav2k15 &amp; finally graduate bachelor of engineer with distinction</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div class="timeline-entry-inner">
                  <div class="timeline-icon color-2">
                  <i class="icon-pen2"></i>
                  </div>
                  <div class="timeline-label" style={{padding:'0px'}}>
                  <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne" style={{border:'none'}}>
                    <h4 class="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseEduTwo" aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                        <p style={{margin:'0'}}><b>12th</b>&nbsp;-&nbsp;<b>HSC</b>&nbsp;-&nbsp;<b>Science</b></p>
                        <p style={{margin:'0'}}><b>Patkar College</b></p>
                        <p style={{margin:'0'}}><b>Maharashtra State Board </b></p>
                        <p style={{margin:'0'}}><b>2010</b></p>    
                      </a>
                    </h4>
                  </div>
                  <div id="collapseEduTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height:'0px'}}>
                  </div>
                  </div>
                  </div>
                </div>
              </article>
              <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div class="timeline-entry-inner">
                  <div class="timeline-icon color-2">
                  <i class="icon-pen2"></i>
                  </div>
                  <div class="timeline-label" style={{padding:'0px'}}>
                  <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne" style={{border:'none'}}>
                    <h4 class="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseEduThree" aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                        <p style={{margin:'0'}}><b>10th</b>&nbsp;-&nbsp;<b>SSC</b></p>
                        <p style={{margin:'0'}}><b>Indian Education Society</b></p>
                        <p style={{margin:'0'}}><b>Maharashtra State Board </b></p>
                        <p style={{margin:'0'}}><b>2008</b></p>    
                      </a>
                    </h4>
                  </div>
                  <div id="collapseEduThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height:'0px'}}>
                  </div>
                  </div>
                  </div>
                </div>
              </article>
              <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                <div class="timeline-entry-inner">
                  <div class="timeline-icon color-none">
                  </div>
                </div>
              </article>
            </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    );
  }
}
export default Education;
