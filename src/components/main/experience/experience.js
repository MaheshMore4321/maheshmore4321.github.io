import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 

import ExperienceDetails from './experience_details';

class Experience extends Component {
  constructor(props){
		super(props)

		this.state = {
      experience_: [],
      loaded: false
    }
  }
  componentDidMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{ 
      this.setState({experience_: response.data.experience});
		})
		.catch(error =>{
			console.log(error);
		})
	}

  render() {
    const {experience_} = this.state;

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
                          experience_.map((experience_inner, index) =>
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
