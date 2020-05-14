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
      <HeroArea/>
      <hr className='no-margin'/>
      <Introduction/>
      <hr className='no-margin'/>
      <Education/>
      <hr className='no-margin'/>
      <Skill/>
      <hr className='no-margin'/>
      <Experience/>
      <hr className='no-margin'/>
      <Project/>
      <hr className='no-margin'/>
      <ContactMe/>
      <hr className='no-margin'/>
    </div>
    );
  }
}
export default Main;