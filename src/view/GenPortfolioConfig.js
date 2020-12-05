import React, { Component } from 'react';

import PortfolioUi from './PortfolioUi';

class GenPortfolioConfig extends Component {
  constructor(props){
		super(props)

		this.state = {
      allData: {
        "sidebar":{
          name:"", job_title:"", profile_picture_link:"", background_picture_link:"", facebook_link:"", twitter_link:"", instgram_link:"", linkedin_link:"", github_link:"", website_link:""
        },
        "heroarea" : [],
        "intro" : {
          introduction:"", "introExpertieList": []
        },
        "education":[],
        "skill": [],
        "experience": [],
        "project": [],
        "contactme":{
          mobileNumber:"", address:"", emailId:"", feedback_link:""
        }
      },

      prflImgSrc:'/images/default-profile.jpg',
      bkglImgSrc: '/images/bg.png',
    };
  }

  //----------------------CLICK ACTION HANDLERS-------------------------------------------------------
  changeHandler = e => {
    //console.log("---------changeHandler---------");
    let allData = this.state.allData;
    //console.log(allData);
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

  addClick(i){
    //console.log("---------addClick---------");
    let allData = this.state.allData;
    //console.log(allData);
    const val = i.split('|');
    //console.log(val);
    if(val.length === 1 ){
      //console.log("val is 1");
      allData[i] = [...allData[i], ''];
      //console.log(allData);
    }
    if(val.length === 2 ){
      //console.log("val is 2");
      allData[val[0]][val[1]] = [...allData[val[0]][val[1]], ''];
      //console.log(allData);
    }
    else if(val.length === 3 ){
      //console.log("val is 3");
      if(!allData[val[0]][val[1]]) {
        //console.log("val is 3.1");
        allData[val[0]][val[1]] = [];
        //console.log(allData);
      }
      if(!allData[val[0]][val[1]][val[2]]) {
        //console.log("val is 3.2");
        allData[val[0]][val[1]][val[2]] = [];
        //console.log(allData);
      }
      //console.log(allData);
      allData[val[0]][val[1]][val[2]] = [...allData[val[0]][val[1]][val[2]], ''];
      //console.log(allData);
    }
    //console.log(allData);
    this.setState({ allData });
    //console.log(allData);
    //console.log("---------addClick---------");
  }

  removeClick(j, i) {
    //console.log("---------addArea---------");
    //console.log(" j : "+j+", i : "+i);
    const val = j.split('|');
    //console.log(val);
    let allData = this.state.allData;
    //console.log(allData);
    if(val.length === 2 ){
      //console.log("val is 2");
      let innrAllData = allData[val[0]];
      //console.log(innrAllData);
      //console.log(allData);
      innrAllData[val[1]].splice(i,1);
      //console.log(innrAllData);
      //console.log(allData);
    }
    else {
      //console.log("val is not 2");
      allData[val[0]].splice(i,1);
      //console.log(allData);
    }
    //console.log(allData);
    this.setState({ allData });
    //console.log(allData);
    //console.log("---------addArea---------");
  }
  //----------------------CLICK ACTION HANDLERS-------------------------------------------------------
  //----------------------UTILITY---------------------------------------------------------------------
  getMapData(j){
    const val = j.split('|');
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
  heroAreaUI(j){
    return Array.from(this.state.allData[j]).map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|backgroundImg"} onChange={this.changeHandler} className="form-control" placeholder="Background Image path" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|headerLine"} onChange={this.changeHandler} className="form-control" placeholder="HeaderLine" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|link"} onChange={this.changeHandler} className="form-control" placeholder="Link" required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|text"} onChange={this.changeHandler} className="form-control" placeholder="Text line" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"heroarea|"+i+"|icon"} onChange={this.changeHandler} className="form-control" placeholder="Icon" required/>
            </div>
            <div className="form-group">
              <input type='button' name={"heroarea|"+i} value='remove' onClick={this.removeClick.bind(this, 'heroarea', i)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  

  intrExpertiesUI(j){
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"intro|introExpertieList|"+i+"|icon"} onChange={this.changeHandler} className="form-control" value={this.state.allData['intro']['introExpertieList'][i].icon||''} placeholder="Introduction Experties Icon" required/>
            </div>
          </div>
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"intro|introExpertieList|"+i+"|desc"} onChange={this.changeHandler} className="form-control" value={this.state.allData['intro']['introExpertieList'][i].desc||''} placeholder="Introduction Experties Description" required/>
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

  eductnUI(j){
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|institute"} onChange={this.changeHandler} className="form-control" value={this.state.allData['education'][i].institute||''} placeholder="Education Institude" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|std_branch"} onChange={this.changeHandler} className="form-control" value={this.state.allData['education'][i].std_branch||''} placeholder="Education Standard Branch" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|university"} onChange={this.changeHandler} className="form-control" value={this.state.allData['education'][i].university||''} placeholder="Education University" required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|year"} onChange={this.changeHandler} className="form-control" value={this.state.allData['education'][i].year||''} placeholder="Education Year" required/>
            </div>
            <div className="form-group">
              <input type="text"  name={"education|"+i+"|desc"} onChange={this.changeHandler} className="form-control" value={this.state.allData['education'][i].desc||''} placeholder="Education Description" required/>
            </div>
            <div className="form-group">
              <input type='button' name={"education|"+i} value='remove' onClick={this.removeClick.bind(this, 'education', i)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  skillUI(j){
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-6">
            <div className="form-group">
              <input type="text"  name={"skill|"+i+"|skillHeader"} onChange={this.changeHandler} className="form-control" value={this.state.allData['skill'][i].skillHeader||''} placeholder="Skill Header" required/>
            </div>
          </div>
          <div  className="col-md-6">
            <div className="form-group">
              <input type='button' name={"skill|"+i} value='remove' onClick={this.removeClick.bind(this, 'skill', i)}/>
            </div>
          </div>
          <div  className="col-md-12">
            {this.addAryUI("skill|"+i+"|skillList")}
              <input type='button' value='Add Skill Technology' onClick={this.addClick.bind(this, "skill|"+i+"|skillList")}/>
          </div>
        </div>
      </div>
    )
  }

  addAryUI(j){
    const val = j.split('|');
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="col-md-3">
          <div  className="col-md-9">
            <div className="form-group">
              <input type="text"  name={j+"|"+i} onChange={this.changeHandler} className="form-control" value={this.state.allData[val[0]][val[1]][val[2]][i]||''} placeholder="Skill Name" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, 'skill', i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  ExperienceUI(j){
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"experience|"+i+"|job_compy_desig"} onChange={this.changeHandler} className="form-control" value={this.state.allData['experience'][i].job_compy_desig||''} placeholder="Job Company/Designation" required/>
            </div>
          </div>
          <div  className="col-md-5">
            <div className="form-group">
              <input type="text"  name={"experience|"+i+"|job_duration"} onChange={this.changeHandler} className="form-control" value={this.state.allData['experience'][i].job_duration||''} placeholder="Job Duration" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={"experience|"+i} value='remove' onClick={this.removeClick.bind(this, 'experience', i)}/>
            </div>
          </div>
          <div  className="col-md-12">
            {this.addAryForFullLineUI("experience|"+i+"|job_desc")}
              <input type='button' value='Add Job Description' onClick={this.addClick.bind(this, "experience|"+i+"|job_desc")}/>
          </div>
        </div>
      </div>
    )
  }
  addAryForFullLineUI(j){
    const val = j.split('|');
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-10">
            <div className="form-group">
              <input type="text"  name={j+"|"+i} onChange={this.changeHandler} className="form-control" value={this.state.allData[val[0]][val[1]][val[2]][i]||''} placeholder="Job Description" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, 'skill', i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  ProjectUI(j){
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_nm"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_nm||''} placeholder="Project Name" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_org"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_org||''} placeholder="Project Oraganisation" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_clnt"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_clnt||''} placeholder="Project Client" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_dur"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_dur||''} placeholder="Project Duration" required/>
            </div>
          </div>

          <div  className="col-md-12">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_tec"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_tec||''} placeholder="Project Technology" required/>
            </div>
          </div>

          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_typ"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_typ||''} placeholder="Project Type" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_env"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_env||''} placeholder="Project Enviroment" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_role"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_role||''} placeholder="Project Role" required/>
            </div>
          </div>
          <div  className="col-md-3">
            <div className="form-group">
              <input type="text"  name={"project|"+i+"|prj_tmsz"} onChange={this.changeHandler} className="form-control" value={this.state.allData['project'][i].prj_tmsz||''} placeholder="Project Team Size" required/>
            </div>
          </div>

          <div  className="col-md-11">
            <div className="form-group">
              <textarea name="project|prj_desc" onChange={this.changeHandler} id="prj_desc" cols="30" rows="7" className="form-control" placeholder="Project Short Introduction" required></textarea>
            </div>
          </div>
          <div  className="col-md-1">
            <div className="form-group">
              <input type='button' name={"project|"+i} value='remove' onClick={this.removeClick.bind(this, 'project', i)}/>
            </div>
          </div>
          <div  className="col-md-12">
            {this.addAryForPrjFullLineUI("project|"+i+"|prj_rl_desc")}
            <input type='button' value='Add Project Description' onClick={this.addClick.bind(this, "project|"+i+"|prj_rl_desc")}/>
          </div>
        </div>
      </div>
    )
  }
  addAryForPrjFullLineUI(j){
    const val = j.split('|');
    const map = this.getMapData(j);
    return map.map((el, i) =>
      <div key={i}>
        <div  className="row">
          <div  className="col-md-10">
            <div className="form-group">
              <input type="text"  name={j+"|"+i} onChange={this.changeHandler} className="form-control" value={this.state.allData[val[0]][val[1]][val[2]][i]||''} placeholder="Project Description" required/>
            </div>
          </div>
          <div  className="col-md-2">
            <div className="form-group">
              <input type='button' name={j+"|"+i} value='remove' onClick={this.removeClick.bind(this, 'skill', i)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //----------------------UI SECTIONS/COMPONENTS------------------------------------------------------
  //----------------------UI SECTIONS/MODAL-----------------------------------------------------------
  LivePreviewModal = () => {
    return (
      <>
        <button className="form-control" data-toggle="modal" data-target="#myModal">Live Preview</button>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <PortfolioUi data={this.state.allData}/>
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
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                {JSON.stringify(this.state.allData)}
                {/* {this.state.allData} */}
                {/* JSON.stringify({this.state.allData}) */}
                {/* {this.state.allData.map(block => block.component)} */}
                {/* <div>{this.state.allData.map((selected, index) => (
                  <p key={index}>{selected.ridername}</p>
                ))}</div> */}
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //----------------------UI SECTIONS/MODAL-----------------------------------------------------------

  render() {
    const {prflImgSrc, bkglImgSrc} = this.state;
    return (
    <>
      <form>
        <div className="row">
          <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta"  style={{padding:'10px 15px 0 15px'}}>Generate Portfolio Config</span>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingSidebar">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                  href="#SidebarData" aria-expanded="false" aria-controls="collapseTwo">Sidebar</a>
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
                            <input type="text" name="sidebar|profile_picture_link" onChange={this.changeHandler} className="form-control" style={{position:"absolute", bottom:"0px"}}placeholder={bkglImgSrc} required/>
                          </div>
                          <input type="text" name="sidebar|background_picture_link" onChange={this.changeHandler} className="form-control" style={{position:"absolute", bottom:"0px"}}placeholder={prflImgSrc} required/>
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
                              <input type="text"  name="sidebar|website_link" value={this.state.allData['sidebar'].website_link||''} onChange={this.changeHandler} className="form-control" placeholder="BlogSite" required/>
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

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingHeroArea">
              <h4 className="panel-title">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                  href="#HeroAreaData" aria-expanded="false" aria-controls="collapseTwo">Hero Area</a>
              </h4>
          </div>
          <div id="HeroAreaData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingHeroArea">
            <div className="panel-body">
              <div className="row" style={{padding:'10px'}} >
                {this.heroAreaUI('heroarea')}
                <input type='button' value='Add Hero Area' onClick={this.addClick.bind(this, 'heroarea')}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingIntrod">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                  href="#IntrodData" aria-expanded="false" aria-controls="collapseTwo">Introduction</a>
            </h4>
          </div>
          <div id="IntrodData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingIntrod">
            <div className="panel-body">
              <div className="row" style={{padding:'10px'}} >
                <div className="form-group">
                  <textarea name="intro|introduction" onChange={this.changeHandler} id="intro" cols="30" rows="7" className="form-control" placeholder="Introduction" required></textarea>
                </div>
                {this.intrExpertiesUI('intro|introExpertieList')}
                <input type='button' value='Add Introduction Experties' onClick={this.addClick.bind(this, 'intro|introExpertieList')}/>
              </div>
            </div>
          </div>
        </div>

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
                {this.eductnUI('education')}
                <input type='button' value='Add Education' onClick={this.addClick.bind(this, 'education')}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingSkill">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                  href="#skillData" aria-expanded="false" aria-controls="collapseTwo">Skill</a>
            </h4>
          </div>
          <div id="skillData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSkill">
            <div className="panel-body">
              <div className="row" style={{padding:'10px'}} >
                {this.skillUI('skill')}
                <input type='button' value='Add Skill' onClick={this.addClick.bind(this, 'skill')}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingExperience">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                  href="#experienceData" aria-expanded="false" aria-controls="collapseTwo">Experience</a>
            </h4>
          </div>
          <div id="experienceData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingExperience">
            <div className="panel-body">
              <div className="row" style={{padding:'10px'}} >
                {this.ExperienceUI('experience')}
                <input type='button' value='Add Experience' onClick={this.addClick.bind(this, 'experience')}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingProject">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
              href="#projectData" aria-expanded="false" aria-controls="collapseTwo">Project</a>
            </h4>
          </div>
          <div id="projectData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingProject">
            <div className="panel-body">
              <div className="row" style={{padding:'10px'}} >
                {this.ProjectUI('project')}
                <input type='button' value='Add Project' onClick={this.addClick.bind(this, 'project')}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingcontactme">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion"
                href="#contactmeData" aria-expanded="false" aria-controls="collapseTwo">Contact Me</a>
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
                          <input type="text"  name="contactme|mobileNumber" value={this.state.allData['contactme'].mobileNumber||''} onChange={this.changeHandler} className="form-control" placeholder="Mobile Number" required/>
                        </div>
                      </div>
                      <div  className="col-md-4">
                        <div className="form-group">
                          <input type="text"  name="contactme|address" value={this.state.allData['contactme'].address||''} onChange={this.changeHandler} className="form-control" placeholder="Address" required/>
                        </div>
                      </div>
                      <div  className="col-md-4">
                        <div className="form-group">
                          <input type="text"  name="contactme|emailId" value={this.state.allData['contactme'].emailId||''} onChange={this.changeHandler} className="form-control" placeholder="EmailId" required/>
                        </div>
                      </div>
                    </div>
                    <div  className="row">
                      <div  className="col-md-12">
                        <div className="form-group">
                          <input type="text"  name="contactme|feedback_link" value={this.state.allData['contactme'].feedback_link||''} onChange={this.changeHandler} className="form-control" placeholder="Conact Form Feedback API link" required/>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div  className="col-md-6">
            <this.getLiveModalJSON/>
          </div>
          <div  className="col-md-6">
            <this.LivePreviewModal/>
          </div>
        </div>
      </form>
    </>
    );
  }
}
export default GenPortfolioConfig;