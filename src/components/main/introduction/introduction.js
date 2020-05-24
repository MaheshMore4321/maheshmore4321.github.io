import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="sym-about" data-section="aboutme">
        <div className="sym-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="sym-heading">Who Am I?</h2>
                    <p><strong>Hi I'm Mahesh More</strong>, Working as Senior Software Developer &amp; i have more than 5 years of experience in the IT industry. Currently working for Citi bank project @Virtusa as Senior Software Developer, Where provides the software solution for CRM &amp; various applications</p>
                    <p>I have Working on BFSI domain projects involved in the development &amp; support of and new/existing application where i use technologies like Java Core, Advanced (J2EE), Spring and Databases like MySQL, MsSQL, Oracle and Web Applications.</p>
                    <p>Hands-on experience of testing at all the levels to build an enterprise application &amp; I'm Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues. Willing to take initiative and responsibility for core component and development.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{margin:'0px'}}/>
      <section className="sym-services" data-section="aboutme1">
      <div className="sym-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">What I do?</span>
            <h2 className="sym-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box">
            <div className="services color-1">
              <span className="icon">
                <i className="icon-bulb"></i>
              </span>
              <div className="desc">
                <h3>Innovative Ideas</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-2">
              <span className="icon">
                <i className="icon-data"></i>
              </span>
              <div className="desc">
                <h3>Software</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3">
              <span className="icon">
                <i className="icon-phone3"></i>
              </span>
              <div className="desc">
                <h3>Application</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
export default Introduction;

