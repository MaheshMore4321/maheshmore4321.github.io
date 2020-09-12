import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios';

import SkillDetails from './skill_details';
class Skill extends Component {
  constructor(props){
		super(props)

		this.state = {
      skill_: [],
      loaded: false
    }
  }
  componentWillMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{
      this.setState({skill_: response.data.skill});
		})
		.catch(error =>{
			console.log(error);
		})
  }

  render() {
    const {skill_} = this.state;
    return (
      <>
        <section className="sym-skills" data-section="skill">
          <div className="sym-narrow-content">
              <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">My Skills</span>
                      <h2 className="sym-heading animate-box">Technical Skills</h2>
                    </div>
              </div>
              <div className="row" style={{margintop:'15px'}}>
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                      <div className="fancy-collapse-panel">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                          {
                            skill_.map((skill_inner, index) =>
                              <SkillDetails
                                key={index}
                                data={skill_inner}
                                id={index+1}
                              />
                            )
                          }
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
}
export default Skill;
