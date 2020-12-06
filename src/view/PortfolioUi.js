import React, { Component } from 'react';

import Sidebar from '../component/sidebar/Sidebar';

import HeroArea from "../component/heroarea/HeroArea";
import Introduction from "../component/introduction/Introduction";
import Education from "../component/education/Education";
import Skill from "../component/skill/Skill";
import Experience from "../component/experience/Experience";
import Project from "../component/project/Project";
import ContactMe from "../component/contactme/ContactMe";

class PortfolioUi extends Component {
  componentDidMount(){
    toLoadJavascriptFunction();
  }
  componentDidUpdate(){
    //toLoadJavascriptFunction();
  }

  render() {
    return (
      <div id="sym-page">
        <a href="# " className="js-sym-nav-toggle sym-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <Sidebar
          data={this.props.data && this.props.data.sidebar}
        />
        <div id="sym-main">

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
      </div>
    );
  }
}
export default PortfolioUi;

function toLoadJavascriptFunction() {
  const script = document.createElement("script");
  script.src = "/js/main.js";
  document.getElementsByTagName('body')[0].appendChild(script);
}