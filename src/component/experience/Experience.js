import React, { Component } from 'react';

import ExperienceDetails from './ExperienceDetails';

class Experience extends Component {
  render() {
    return (
      <>
        <section className="sym-experience" data-section="experience">
          <div className="sym-narrow-content">
              <div className="row" style={{marginbottom:'2em'}}>
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Experience</span>
                      <h2 className="sym-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      <div className="timeline-centered">
                        {
                          this.props.data && this.props.data.map((experience_inner, index) =>
                            <ExperienceDetails
                              key={index}
                              data={experience_inner}
                              id={index+1}
                            />
                          )
                        }
                        <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-none"></div>
                          </div>
                        </article>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </>
    );
  }
}
export default Experience;
