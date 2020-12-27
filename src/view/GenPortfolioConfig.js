import React, { Component } from 'react';

import PortfolioUi from './PortfolioUi';

import SidebarJSON from '../component/sidebar/SidebarJSON';
import HeroAreaSlideJSON from '../component/heroarea/HeroAreaSlideJSON';
import IntroExpertieListJSON from '../component/introduction/IntroExpertieListJSON';
import EducationJSON from '../component/education/EducationJSON';
import SkillJSON from '../component/skill/SkillJSON';
import ExperienceJSON from '../component/experience/ExperienceJSON';
import ProjectJSON from '../component/project/ProjectJSON';
import ContactMeJSON from '../component/contactme/ContactMeJSON';
class GenPortfolioConfig extends Component {
  constructor(props){
    super(props)

		this.state = {
      allData: {
        "sidebar":{ name:"", job_title:"", profile_picture_link:"", background_picture_link:"", facebook_link:"", twitter_link:"", instgram_link:"", linkedin_link:"", github_link:"", website_link:"" },
        "heroarea" : [],
        "intro" : { introduction:"", "introExpertieList": [] },
        "education":[],
        "skill": [],
        "experience": [],
        "project": [],
        "contactme":{ mobileNumber:"", address:"", emailId:"", feedback_link:"" },
        "refreshcomponent":false,
      },
      prflImgSrc:'/images/default-profile.jpg',
      bkglImgSrc: '/images/bg.png',
      portfolioUIEnable : true,
    };
  }

  //----------------------CLICK ACTION HANDLERS-------------------------------------------------------
  changeHandler = (e) => {
    //console.log("---------changeHandler---------");
    let allData = this.state.allData;
    //console.log(allData);
    //console.log(e);
    //console.log(e.target.name);
    const val = e.target.name.split('|');
    //console.log(val);
    if(val.length === 2 ){
      //console.log("val is 2");
      allData[val[0]][val[1]] = e.target.value;
      //console.log(allData);
    }
    else if(val.length === 3 ){
      //console.log("val is 3");
      if(!allData[val[0]][val[1]]) {
        //console.log("val is 3.1");
        allData[val[0]][val[1]] = [];
        //console.log(allData);
      }
      allData[val[0]][val[1]][val[2]] = e.target.value;
      //console.log(allData);
    }
    else if(val.length === 4 ){
      //console.log("val is 4");
      if(!allData[val[0]][val[1]]) {
        //console.log("val is 4.1");
        allData[val[0]][val[1]] = [];
        //console.log(allData);
      }
      if(!allData[val[0]][val[1]][val[2]]) {
        //console.log("val is 4.2");
        allData[val[0]][val[1]][val[2]] = [];
        //console.log(allData);
      }
      allData[val[0]][val[1]][val[2]][val[3]] = e.target.value;
      //console.log(allData);
    }
    //console.log(allData);
    this.setState({ allData });
    //console.log(allData);
    //console.log("---------changeHandler---------");
  }

  addClick = (i) => {
    let allData = this.state.allData;
    const val = i.split('|');
    if(val.length === 1 ){
      allData[i] = [...allData[i], ''];
    }
    if(val.length === 2 ){
      allData[val[0]][val[1]] = [...allData[val[0]][val[1]], ''];
    }
    else if(val.length === 3 ){
      if(!allData[val[0]][val[1]]) {
        allData[val[0]][val[1]] = [];
      }
      if(!allData[val[0]][val[1]][val[2]]) {
        allData[val[0]][val[1]][val[2]] = [];
      }
      allData[val[0]][val[1]][val[2]] = [...allData[val[0]][val[1]][val[2]], ''];
    }
    this.setState({ allData });
  }

  removeClick = (j, i) => {
    // console.log("i");
    // console.log(i);
    // console.log("j");
    // console.log(j);
    const val = j.split('|');
    // console.log("val");
    // console.log(val);
    // console.log("val.length");
    // console.log(val.length);
    let allData = this.state.allData;
    // console.log("allData");
    // console.log(allData);
    if(val.length === 1 ){
      // console.log("===1");
      allData[val[0]].splice(i,1);
      // console.log("allData");
      // console.log(allData);
    }
    if(val.length === 2 ){
      // console.log("===2");
      let innrAllData = allData[val[0]];
      // console.log("innrAllData");
      // console.log(innrAllData);
      innrAllData[val[1]].splice(i,1);
      // console.log("innrAllData");
      // console.log(innrAllData);
      // console.log("allData");
      // console.log(allData);
    }
    else if(val.length === 3 ){
      // console.log("===3");
      let innrAllData = allData[val[0]][val[1]];
      // console.log("innrAllData");
      // console.log(innrAllData);
      innrAllData[val[2]].splice(i,1);
      // console.log("innrAllData");
      // console.log(innrAllData);
      // console.log("allData");
      // console.log(allData);
    }
    // console.log("allData");
    // console.log(allData);
    this.setState({ allData });
    // console.log("allData");
    // console.log(allData);
  }
  //----------------------CLICK ACTION HANDLERS-------------------------------------------------------
  //----------------------UTILITY---------------------------------------------------------------------
  getMapData = (val) => {
    let map = [];
    let allData = this.state.allData;
    if(val.length === 3 ){
      if(allData[val[0]][val[1]][val[2]]) {
        map=Array.from(allData[val[0]][val[1]][val[2]]);
      }
    }
    else if(val.length === 2 ){
      map=Array.from(allData[val[0]][val[1]]);
    }
    else {
      map=Array.from(allData[val[0]]);
    }
    return map;
  }
  //----------------------UTILITY---------------------------------------------------------------------
  //----------------------UI SECTIONS/COMPONENTS------------------------------------------------------
  sidebarUI = () => {
    return (
      <>
        <div className="row" style={{marginRight:"0px"}}>
          <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta"  style={{padding:'10px 15px 0 15px'}}>Generate Portfolio Config</span>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingSidebar">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#SidebarData" aria-expanded="false" aria-controls="collapseTwo">Sidebar</a>
            </h4>
          </div>
          <div id="SidebarData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSidebar">
            <div className="panel-body">
              <div className="row">
                <section id="sec_headingSidebar" className="sym-sidebar" data-section="dataSidebar" style={{padding:"0 10px 0 10px"}}>
                  <div  className="sym-narrow-content">
                    <div  className="row">
                      <div  className="col-md-6">
                        <h2  className="sym-heading">Profile Area</h2>
                        <br></br>
                        <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft" style={{height:"235px",backgroundImage:`url(${this.state.allData['sidebar'].background_picture_link||this.state.bkglImgSrc})`,backgroundSize:"cover"}}>
                          <div className="author-img" style={{backgroundImage:`url(${this.state.allData['sidebar'].profile_picture_link||this.state.prflImgSrc})`,width:'150px',height:'150px',margin:'10px auto',marginBottom:'30px',borderRadius:'50%'}}>
                            <input type="text" name="sidebar|profile_picture_link" value={this.state.allData['sidebar'].profile_picture_link||''} onChange={this.changeHandler} className="form-control" style={{position:"absolute", bottom:"0px"}} placeholder={this.state.bkglImgSrc} required/>
                          </div>
                          <input type="text" name="sidebar|background_picture_link" value={this.state.allData['sidebar'].background_picture_link||''} onChange={this.changeHandler} className="form-control" style={{position:"absolute", bottom:"0px"}} placeholder={this.state.prflImgSrc} required/>
                        </div>
                        <div className="form-group">
                          <input type="text"  name="sidebar|name" value={this.state.allData['sidebar'].name||''} onChange={this.changeHandler} className="form-control" placeholder="NameOnProfile" required/>
                        </div>
                        <div className="form-group">
                          <input type="text"  name="sidebar|job_title" value={this.state.allData['sidebar'].job_title||''} onChange={this.changeHandler} className="form-control" placeholder="JobTitle" required/>
                        </div>
                      </div>
                      <div  className="col-md-6">
                        <div  className="row">
                          <div  className="col-md-12 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                            <h2  className="sym-heading">Social Network's</h2>
                            <br></br>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|facebook_link" value={this.state.allData['sidebar'].facebook_link||''} onChange={this.changeHandler} className="form-control" placeholder="Facebook" required/>
                            </div>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|twitter_link" value={this.state.allData['sidebar'].twitter_link||''} onChange={this.changeHandler} className="form-control" placeholder="Twitter" required/>
                            </div>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|instgram_link" value={this.state.allData['sidebar'].instgram_link||''} onChange={this.changeHandler} className="form-control" placeholder="Instagram" required/>
                            </div>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|linkedin_link" value={this.state.allData['sidebar'].linkedin_link||''} onChange={this.changeHandler} className="form-control" placeholder="LinkedIn" required/>
                            </div>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|github_link" value={this.state.allData['sidebar'].github_link||''} onChange={this.changeHandler} className="form-control" placeholder="Github" required/>
                            </div>
                            <div  className="form-group">
                              <input type="text"  name="sidebar|website_link" value={this.state.allData['sidebar'].website_link||''} onChange={this.changeHandler} className="form-control" placeholder="Website" required/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
z
  heroareaUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingHeroArea">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#HeroAreaData" aria-expanded="false" aria-controls="collapseTwo">Hero Area</a>
          </h4>
        </div>
        <div id="HeroAreaData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingHeroArea">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              {this.heroareaTab('heroarea')}
              <input type='button' value='Add Hero Area' onClick={this.addClick.bind(this, 'heroarea')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  heroareaTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-md-6">
            <div  className="form-group sym-feature sym-feature-sm" data-animate-effect="fadeInLeft" style={{height:"235px",backgroundImage:`url(${this.state.allData['heroarea'][i].backgroundImg||this.state.bkglImgSrc})`,backgroundSize:"cover"}}>
             <input type="text" name={"heroarea|"+i+"|backgroundImg"} value={this.state.allData['heroarea'][i].backgroundImg||''} onChange={this.changeHandler} className="form-control" style={{position:"absolute", bottom:"0px"}} placeholder='Background Image path' required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="row">
                <div className="col-md-1">
                  <div className="iconMgn">
                    <i className={this.state.allData['heroarea'][i].icon||''}></i>
                  </div>
                </div>
                <div className="col-md-11">
                  <select className="form-control" name={"heroarea|"+i+"|icon"} value={this.state.allData['heroarea'][i].icon||''}  onChange={this.changeHandler}>
                    <option>Select Icon</option>
                    <option value="icon-download4">Download Icon</option>
                    <option value="icon-book">Book Icon</option>
                    <option value="icon-briefcase3">Briefcase Icon</option>
                    <option value="icon-bulb">Bulb Icon</option>
                    <option value="icon-data">Data Icon</option>
                    <option value="icon-phone3">Phone Icon</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|headerLine"} onChange={this.changeHandler} className="form-control" value={this.state.allData['heroarea'][i].headerLine||''} placeholder="HeaderLine" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|text"} onChange={this.changeHandler} className="form-control" value={this.state.allData['heroarea'][i].text||''} placeholder="Text line" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|link"} onChange={this.changeHandler} className="form-control" value={this.state.allData['heroarea'] && this.state.allData['heroarea'][i] && this.state.allData['heroarea'][i].link && this.state.allData['heroarea'][i].link||''} placeholder="Link" required></input>
            </div>
            <div className="form-group">
              <input type='button' name={"heroarea|"+i} value='remove' onClick={this.removeClick.bind(this, 'heroarea', i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  introductionUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingIntrod">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#IntrodData" aria-expanded="false" aria-controls="collapseTwo">Introduction</a>
          </h4>
        </div>
        <div id="IntrodData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingIntrod">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              <div className="form-group">
                <textarea name="intro|introduction" onChange={this.changeHandler} id="intro" cols="30" rows="7" className="form-control" value={this.state.allData['intro'].introduction||''} placeholder="Introduction" required></textarea>
              </div>
              {this.introductionExpertiesTab('intro|introExpertieList')}
              <input type='button' value='Add Introduction Experties' onClick={this.addClick.bind(this, 'intro|introExpertieList')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  introductionExpertiesTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-5">
            <div className="form-group">
              <div className="row">
                <div className="col-md-2">
                  <div className="iconMgn" style={{float: 'right'}}>
                    <i className={this.state.allData['intro']['introExpertieList'][i].icon||''}></i>
                  </div>
                </div>
                <div className="col-md-10">
                  <select className="form-control" name={"intro|introExpertieList|"+i+"|icon"} value={this.state.allData['intro']['introExpertieList'][i].icon||''} onChange={this.changeHandler}>
                    <option>Select Icon</option>
                    <option value="icon-download4">Download Icon</option>
                    <option value="icon-book">Book Icon</option>
                    <option value="icon-briefcase3">Briefcase Icon</option>
                    <option value="icon-bulb">Bulb Icon</option>
                    <option value="icon-data">Data Icon</option>
                    <option value="icon-phone3">Phone Icon</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"intro|introExpertieList|"+i+"|desc"} value={this.state.allData['intro']['introExpertieList'][i].desc||''} onChange={this.changeHandler} className="form-control" placeholder="Introduction Experties Description" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={"intro|introExpertieList|"+i} value='remove' onClick={this.removeClick.bind(this, 'intro|introExpertieList', i)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  educationUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingEductn">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
              href="#EductnData" aria-expanded="false" aria-controls="collapseTwo">Education</a>
          </h4>
        </div>
        <div id="EductnData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEductn">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              {this.educationTab('education')}
              <input type='button' value='Add Education' onClick={this.addClick.bind(this, 'education')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  educationTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|institute"} value={this.state.allData['education'][i].institute||''} onChange={this.changeHandler} className="form-control" placeholder="Education Institude" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|std_branch"} value={this.state.allData['education'][i].std_branch||''} onChange={this.changeHandler} className="form-control" placeholder="Education Standard Branch" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|university"} value={this.state.allData['education'][i].university||''} onChange={this.changeHandler} className="form-control" placeholder="Education University" required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|year"} value={this.state.allData['education'][i].year||''} onChange={this.changeHandler} className="form-control"  placeholder="Education Year" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|desc"} value={this.state.allData['education'][i].desc||''} onChange={this.changeHandler} className="form-control" placeholder="Education Description" required/>
            </div>
            <div className="form-group">
              <input type='button' name={"education|"+i} value='remove' onClick={this.removeClick.bind(this, 'education', i)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  skillUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingSkill">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#skillData" aria-expanded="false" aria-controls="collapseTwo">Skill</a>
          </h4>
        </div>
        <div id="skillData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSkill">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              {this.skillTab('skill')}
              <input type='button' value='Add Skill' onClick={this.addClick.bind(this, 'skill')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  skillTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      // <div >
        <div key={i} className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"skill|"+i+"|skillHeader"} value={this.state.allData['skill'][i].skillHeader || ''} onChange={this.changeHandler} className="form-control" placeholder="Skill Header" required/>
            </div>
          </div>
          <div  className="col-md-6">
            <div className="form-group">
              <input type='button' name={"skill|"+i} value='remove' onClick={this.removeClick.bind(this, 'skill', i)}/>
            </div>
          </div>
          <div  className="col-md-12">
            {this.addSkillListArrayTab("skill|"+i+"|skillList")}
            <input type='button' value='Add Skill Technology' onClick={this.addClick.bind(this, "skill|"+i+"|skillList")}/>
          </div>
        </div>
      // </div>
    );
  }
  addSkillListArrayTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i} className="col-md-3">
        <div  className="col-md-9">
          <div className="form-group">
            <input type="text"  name={j+"|"+i} value={this.state.allData[val[0]][val[1]][val[2]][i] || ''} onChange={this.changeHandler} className="form-control" placeholder="Skill Name" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, j, i)}/>
          </div>
        </div>
      </div>
    );
  }

  experienceUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingExperience">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#experienceData" aria-expanded="false" aria-controls="collapseTwo">Experience</a>
          </h4>
        </div>
        <div id="experienceData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingExperience">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              {this.experienceTab('experience')}
              <input type='button' value='Add Experience' onClick={this.addClick.bind(this, 'experience')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  experienceTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"experience|"+i+"|job_compy_desig"} value={this.state.allData['experience'][i].job_compy_desig || ''} onChange={this.changeHandler} className="form-control" placeholder="Job Company/Designation" required/>
            </div>
          </div>
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"experience|"+i+"|job_duration"} value={this.state.allData['experience'][i].job_duration || ''} onChange={this.changeHandler} className="form-control" placeholder="Job Duration" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={"experience|"+i} value='remove' onClick={this.removeClick.bind(this, 'experience', i)}/>
            </div>
          </div>
          <div  className="col-md-12">
            {this.addExperienceListArrayTab("experience|"+i+"|job_desc")}
              <input type='button' value='Add Job Description' onClick={this.addClick.bind(this, "experience|"+i+"|job_desc")}/>
          </div>
        </div>
      </div>
    )
  }
  addExperienceListArrayTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-10">
            <div className="form-group">
              <input type="text"  name={j+"|"+i} value={this.state.allData[val[0]][val[1]][val[2]][i] || ''} onChange={this.changeHandler} className="form-control" placeholder="Job Description" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, j, i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  projectUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingProject">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#projectData" aria-expanded="false" aria-controls="collapseTwo">Project</a>
          </h4>
        </div>
        <div id="projectData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingProject">
          <div className="panel-body">
            <div className="row" style={{padding:'10px'}} >
              {this.projectTab('project')}
              <input type='button' value='Add Project' onClick={this.addClick.bind(this, 'project')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  projectTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i} className="row">
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_nm"} value={this.state.allData['project'][i].prj_nm || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Name" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_org"} value={this.state.allData['project'][i].prj_org || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Oraganisation" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_clnt"} value={this.state.allData['project'][i].prj_clnt || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Client" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_dur"} value={this.state.allData['project'][i].prj_dur || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Duration" required/>
          </div>
        </div>

        <div  className="col-md-12">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_tec"} value={this.state.allData['project'][i].prj_tec || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Technology" required/>
          </div>
        </div>

        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_typ"} value={this.state.allData['project'][i].prj_typ || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Type" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_env"} value={this.state.allData['project'][i].prj_env || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Enviroment" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_role"} value={this.state.allData['project'][i].prj_role || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Role" required/>
          </div>
        </div>
        <div  className="col-md-3">
          <div className="form-group">
            <input type="text"  name={"project|"+i+"|prj_tmsz"} value={this.state.allData['project'][i].prj_tmsz || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Team Size" required/>
          </div>
        </div>

        <div  className="col-md-11">
          <div className="form-group">
            <textarea name={"project|"+i+"|prj_desc"} value={this.state.allData['project'][i].prj_desc || ''} onChange={this.changeHandler} id="prj_desc" cols="30" rows="7" className="form-control" placeholder="Project Description" required></textarea>
          </div>
        </div>
        <div  className="col-md-1">
          <div className="form-group">
            <input type='button' name={"project|"+i} value='remove' onClick={this.removeClick.bind(this, 'project', i)}/>
          </div>
        </div>
        <div  className="col-md-12">
          {this.addProjectListArrayTab("project|"+i+"|prj_rl_desc")}
          <input type='button' value='Add Project Role Description' onClick={this.addClick.bind(this, "project|"+i+"|prj_rl_desc")}/>
        </div>
      </div>
    )
  }
  addProjectListArrayTab = (j) => {
    const val = j.split('|');
    const map = this.getMapData(val);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-10">
            <div className="form-group">
              <input type="text"  name={j+"|"+i} value={this.state.allData[val[0]][val[1]][val[2]][i] || ''} onChange={this.changeHandler} className="form-control" placeholder="Project Description" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, j, i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  contactmeUI = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingcontactme">
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#contactmeData" aria-expanded="false" aria-controls="collapseTwo">Contact Me</a>
          </h4>
        </div>
        <div id="contactmeData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingcontactme">
          <div className="panel-body">
            <div className="row">
              <section id="sec_headingcontactme" className="sym-contactme" data-section="datacontactme" style={{padding:"0 10px 0 10px"}}>
                <div  className="sym-narrow-content">
                  <div  className="row">
                    <div  className="col-md-4">
                      <div className="form-group">
                        <input type="text"  name="contactme|mobileNumber" value={this.state.allData['contactme'].mobileNumber || ''} onChange={this.changeHandler} className="form-control" placeholder="Mobile Number" required/>
                      </div>
                    </div>
                    <div  className="col-md-4">
                      <div className="form-group">
                        <input type="text"  name="contactme|address" value={this.state.allData['contactme'].address || ''} onChange={this.changeHandler} className="form-control" placeholder="Address" required/>
                      </div>
                    </div>
                    <div  className="col-md-4">
                      <div className="form-group">
                        <input type="text"  name="contactme|emailId" value={this.state.allData['contactme'].emailId || ''} onChange={this.changeHandler} className="form-control" placeholder="EmailId" required/>
                      </div>
                    </div>
                  </div>
                  <div  className="row">
                    <div  className="col-md-12">
                      <div className="form-group">
                        <input type="text"  name="contactme|feedback_link" value={this.state.allData['contactme'].feedback_link || ''} onChange={this.changeHandler} className="form-control" placeholder="Conact Form Feedback API link" required/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //----------------------UI SECTIONS/COMPONENTS------------------------------------------------------
  //----------------------UI SECTIONS/MODAL-----------------------------------------------------------
  LaunchModal = () => {
    return (
      <div className="row footerFixOnBottom" style={{marginRight:"0px"}}>
        <div className="col-md-6">
          {this.getLiveModalJSON()}
        </div>
        <div className="col-md-6">
          {this.LivePreviewModal()}
        </div>
      </div>
    );
  }

  loadRefreshcomponent = (flag) => {
    let allData = this.state.allData;
    //console.log(allData);
    allData.refreshcomponent = flag;
    //console.log(allData);
    this.setState({ allData });
    //console.log(this.state.allData);
  }

  handleOpen = () => {

    this.loadRefreshcomponent(true);

    // console.log("before handleOpen <handleOpen> " + this.state.portfolioUIEnable);
    // this.setState({portfolioUIEnable:true});
    // console.log("after handleOpen </handleOpen> " + this.state.portfolioUIEnable);
  }

  handleClose = () => {

    this.loadRefreshcomponent(false);

    // console.log("before handlerClose <handleOpen> " + this.state.portfolioUIEnable);
    // this.setState({portfolioUIEnable:false});
    // console.log("after handlerClose </handleOpen> " + this.state.portfolioUIEnable);
  }

  LivePreviewModal = () => {
    return (
      <>
        <button id="loadLivePreview" className="form-control" data-toggle="modal" data-target="#myModal" onClick={this.handleOpen}>Live Preview</button>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
          <div id="md" className="modal-dialog" role="document">
            <div id="mc" className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}><span className="iconMgn" aria-hidden="true" style={{borderColor: 'black', lineHeight: '43px'}}>&times;</span></button>
                <div className="row">
                  <div className="col-md-3" style={{float:"left"}}>
                    <h4 className="modal-title" id="myModalLabel">Live Preview</h4>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-2" style={{float:"right"}}>
                    <button id="clickNeedToCopyb" className="form-control">Click to copy</button>
                  </div>
                  <div className="col-md-3" style={{float:"right"}}>
                    <button id="loadComponentPreview" className="form-control">Click here to Load All Component</button>
                  </div>
                  <div id="divNeedToCopyb" style={{display:"none"}}>
                    {this.getPortfolioJSON()}
                  </div>
                </div>
              </div>
              <div className="modal-body">
                {this.state.portfolioUIEnable && <PortfolioUi data={this.state.allData}/>}
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  getLiveModalJSON = () => {
    return (
      <>
        <button className="form-control" data-toggle="modal" data-target="#myModal2">Get JSON</button>

        <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{overflow:"scroll"}}>
              <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="iconMgn" aria-hidden="true" style={{borderColor: 'black', lineHeight: '43px'}}>&times;</span></button>
                <div className="row">
                  <div className="col-md-3" style={{float:"left"}}>
                    <h4 className="modal-title" id="myModalLabel">Get JSON For PortfolioUi</h4>
                  </div>
                  <div className="col-md-7"></div>
                  <div className="col-md-2" style={{float:"right"}}>
                    <button id="clickNeedToCopy" className="form-control">Click to copy</button>
                  </div>
                </div>
              </div>
              <div id="divNeedToCopy" className="modal-body" style={{wordWrap:"break-word"}}>
                {this.getPortfolioJSON()}
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  getPortfolioJSON = () => {
    let heroareaIndex = 1;
    let introExpertieListIndex = 1;
    let educationIndex = 1;
    let skillIndex = 1;
    let experienceIndex = 1;
    let projectIndex = 1;
    return (
      <>
        {"{"}
          <SidebarJSON data={this.state.allData.sidebar}/>,
          "heroarea" : [{
            this.state.allData && this.state.allData.heroarea.map(heroarea_inner =>
              <HeroAreaSlideJSON
                key={heroareaIndex++}
                id={heroareaIndex}
                data={heroarea_inner}
              />
            )
          }],
          "intro" : {"{"}
            "introduction":"{this.state.allData && this.state.allData.intro && this.state.allData.intro.introduction && this.state.allData.intro.introduction}",
            "introExpertieList": [{
              this.state.allData && this.state.allData.intro && this.state.allData.intro.introExpertieList && this.state.allData.intro.introExpertieList.map(introExpertieList_inner =>
                <IntroExpertieListJSON
                  key={introExpertieListIndex++}
                  id={introExpertieListIndex}
                  data={introExpertieList_inner}
                />
              )
            }]
          {"},"}
          "education" : [{
            this.state.allData && this.state.allData.education.map(education_inner =>
              <EducationJSON
                key={educationIndex++}
                id={educationIndex}
                data={education_inner}
              />
            )
          }],
          "skill" : [{
            this.state.allData && this.state.allData.skill.map(skill_inner =>
              <SkillJSON
                key={skillIndex++}
                id={skillIndex}
                data={skill_inner}
              />
            )
          }],
          "experience" : [{
            this.state.allData && this.state.allData.experience.map(experience_inner =>
              <ExperienceJSON
                key={experienceIndex++}
                id={experienceIndex}
                data={experience_inner}
              />
            )
          }],
          "project" : [{
            this.state.allData && this.state.allData.project.map(project_inner =>
              <ProjectJSON
                key={projectIndex++}
                id={projectIndex}
                data={project_inner}
              />
            )
          }],
          <ContactMeJSON data={this.state.allData.contactme}/>
        {"}"}
      </>
    );
  }
  //----------------------UI SECTIONS/MODAL-----------------------------------------------------------

  render() {
    return (
      <>
        <this.sidebarUI/>
        <this.heroareaUI/>
        <this.introductionUI/>
        <this.educationUI/>
        <this.skillUI/>
        <this.experienceUI/>
        <this.projectUI/>
        <this.contactmeUI/>
        <this.LaunchModal/>
      </>
    );
  }
}
export default GenPortfolioConfig;