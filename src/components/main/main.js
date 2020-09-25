import React, { Component } from 'react';

import HeroArea from "./hero-area/hero-area";
import Introduction from "./introduction/introduction";
import Education from "./education/education";
import Skill from "./skill/skill";
import Experience from './experience/experience';
import Project from "./project/project";
import ContactMe from "./contact-me/contact-me";

class Main extends Component {


  render() {
    return (
    <div id="sym-main">
      <hr className='no-margin'/>

      <HeroArea
        data={this.props.data && this.props.data.heroarea}
      />
      <hr className='no-margin'/>

      <Introduction
        data={this.props.data && this.props.data.intro}
      />
      <hr className='no-margin'/>

      <Education
        data={this.props.data && this.props.data.education}
      />
      <hr className='no-margin'/>

      <Skill
        data={this.props.data && this.props.data.skill}
      />
      <hr className='no-margin'/>

      <Experience
        data={this.props.data && this.props.data.experience}
      />
      <hr className='no-margin'/>

      <Project
        data={this.props.data && this.props.data.project}
      />
      <hr className='no-margin'/>

      <ContactMe
        data={this.props.data && this.props.data.contactme}
      />
      <hr className='no-margin'/>
    </div>
    );
  }
}
export default Main;