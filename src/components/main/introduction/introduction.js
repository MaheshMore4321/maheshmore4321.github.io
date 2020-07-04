import React, { Component } from 'react';
import * as api from '../../constant/constant';
import parse from 'html-react-parser';
import axios from 'axios'; 

import IntroductionExpertise from './introduction_experties';

class Introduction extends Component {
  constructor(props){
    super(props)

    this.state = {
      intro_Str:"",
      intro_ExpertieList:[]
    } 
  }
  componentWillMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{ 
      this.setState({intro_Str: response.data.intro.introduction});
      this.setState({intro_ExpertieList: response.data.intro.introExpertieList});
		})
		.catch(error =>{
			console.log(error);
		})
	}
  componentDidMount() {
    toLoadJavascriptFunction();
  }
  componentDidUpdate() {
    toLoadJavascriptFunction();
  }
  render() {
    const {intro_Str, intro_ExpertieList} = this.state;
    return (
      <>
        <section className="sym-about" data-section="aboutme">
          <div className="sym-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="sym-heading">Who Am I?</h2>
                        { intro_Str && parse("<p>"+intro_Str+"</p>") }
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
            {
              intro_ExpertieList.map((introExpertieList_inner, index) =>
                <IntroductionExpertise  
                  key={index}
                  data={introExpertieList_inner}
                  id={index+1}
                />
              )
            }
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Introduction;

function toLoadJavascriptFunction(){
  const script = document.createElement("script");
  script.src = "/js/main.js";
  document.getElementsByTagName('head')[0].appendChild(script);
}