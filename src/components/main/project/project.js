import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios';

import ProjectDetails from './project_details';
class Project extends Component {
  constructor(props){
		super(props)

		this.state = {
      project_: [],
      loaded: false
    }
  }

  componentWillMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{
      this.setState({project_: response.data.project});
		})
		.catch(error =>{
			console.log(error);
		})
  }

  render() {
    const {project_} = this.state;
    return (
      <>
        <section className="sym-experience" data-section="project">
          <div className="sym-narrow-content">
              <div className="row" style={{marginbottom:'2em'}}>
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Project</span>
                      <h2 className="sym-heading animate-box">Professional Project</h2>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="timeline-centered">
                      {
                        project_.map((project_inner, index) =>
                          <ProjectDetails
                            key={index}
                            data={project_inner}
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
export default Project;
