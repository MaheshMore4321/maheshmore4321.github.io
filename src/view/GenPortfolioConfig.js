import React, { Component } from 'react';
import axios from 'axios';

import PortfolioUi from './PortfolioUi';
import * as api from '../constant/Constant';

import SelectOption from '../component/common/SelectOption';
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
      icon_data: [],
    };
  }

  componentDidMount(){
		axios.get(api.JSON_ICON_DATA)
		.then(response =>{ this.setState({icon_data: response.data});})
    .catch(error =>{ console.log(error); })
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

  getIconOptionLst = () => {
    //let iconset = this.state.icon_data.iconset;
    return (
      // iconset.map((el,i) =>
      //   <SelectOption
      //     key={i}
      //     icon={el.icon}
      //     unicode={el.unicode}
      //     text={el.text}
      //   />
      // )
      <>
        <option data-icon="icon icon-arrow-down3" className="icon icon-arrow-down3" value="icon-arrow-down3">&#xe0c5;  icon-arrow-down3</option>
        <option data-icon="icon icon-times" className="icon icon-times" value="icon-times">&#xe930;  icon-times</option>
        <option data-icon="icon icon-tick" className="icon icon-tick" value="icon-tick">&#xe931;  icon-tick</option>
        <option data-icon="icon icon-plus" className="icon icon-plus" value="icon-plus">&#xe932;  icon-plus</option>
        <option data-icon="icon icon-minus" className="icon icon-minus" value="icon-minus">&#xe933;  icon-minus</option>
        <option data-icon="icon icon-equals" className="icon icon-equals" value="icon-equals">&#xe934;  icon-equals</option>
        <option data-icon="icon icon-divide" className="icon icon-divide" value="icon-divide">&#xe935;  icon-divide</option>
        <option data-icon="icon icon-chevron-right" className="icon icon-chevron-right" value="icon-chevron-right">&#xe936;  icon-chevron-right</option>
        <option data-icon="icon icon-chevron-left" className="icon icon-chevron-left" value="icon-chevron-left">&#xe937;  icon-chevron-left</option>
        <option data-icon="icon icon-arrow-right-thick" className="icon icon-arrow-right-thick" value="icon-arrow-right-thick">&#xe938;  icon-arrow-right-thick</option>
        <option data-icon="icon icon-arrow-left-thick" className="icon icon-arrow-left-thick" value="icon-arrow-left-thick">&#xe939;  icon-arrow-left-thick</option>
        <option data-icon="icon icon-th-small" className="icon icon-th-small" value="icon-th-small">&#xe93a;  icon-th-small</option>
        <option data-icon="icon icon-th-menu" className="icon icon-th-menu" value="icon-th-menu">&#xe93b;  icon-th-menu</option>
        <option data-icon="icon icon-th-list" className="icon icon-th-list" value="icon-th-list">&#xe93c;  icon-th-list</option>
        <option data-icon="icon icon-th-large" className="icon icon-th-large" value="icon-th-large">&#xe93d;  icon-th-large</option>
        <option data-icon="icon icon-home" className="icon icon-home" value="icon-home">&#xe93e;  icon-home</option>
        <option data-icon="icon icon-arrow-forward" className="icon icon-arrow-forward" value="icon-arrow-forward">&#xe93f;  icon-arrow-forward</option>
        <option data-icon="icon icon-arrow-back" className="icon icon-arrow-back" value="icon-arrow-back">&#xe940;  icon-arrow-back</option>
        <option data-icon="icon icon-rss" className="icon icon-rss" value="icon-rss">&#xe941;  icon-rss</option>
        <option data-icon="icon icon-location" className="icon icon-location" value="icon-location">&#xe942;  icon-location</option>
        <option data-icon="icon icon-link" className="icon icon-link" value="icon-link">&#xe943;  icon-link</option>
        <option data-icon="icon icon-image" className="icon icon-image" value="icon-image">&#xe944;  icon-image</option>
        <option data-icon="icon icon-arrow-up-thick" className="icon icon-arrow-up-thick" value="icon-arrow-up-thick">&#xe945;  icon-arrow-up-thick</option>
        <option data-icon="icon icon-arrow-down-thick" className="icon icon-arrow-down-thick" value="icon-arrow-down-thick">&#xe946;  icon-arrow-down-thick</option>
        <option data-icon="icon icon-starburst" className="icon icon-starburst" value="icon-starburst">&#xe947;  icon-starburst</option>
        <option data-icon="icon icon-starburst-outline" className="icon icon-starburst-outline" value="icon-starburst-outline">&#xe948;  icon-starburst-outline</option>
        <option data-icon="icon icon-star3" className="icon icon-star3" value="icon-star3">&#xe949;  icon-star3</option>
        <option data-icon="icon icon-flow-children" className="icon icon-flow-children" value="icon-flow-children">&#xe94a;  icon-flow-children</option>
        <option data-icon="icon icon-export" className="icon icon-export" value="icon-export">&#xe94b;  icon-export</option>
        <option data-icon="icon icon-delete2" className="icon icon-delete2" value="icon-delete2">&#xe94c;  icon-delete2</option>
        <option data-icon="icon icon-delete-outline" className="icon icon-delete-outline" value="icon-delete-outline">&#xe94d;  icon-delete-outline</option>
        <option data-icon="icon icon-cloud-storage" className="icon icon-cloud-storage" value="icon-cloud-storage">&#xe94e;  icon-cloud-storage</option>
        <option data-icon="icon icon-wi-fi" className="icon icon-wi-fi" value="icon-wi-fi">&#xe94f;  icon-wi-fi</option>
        <option data-icon="icon icon-heart" className="icon icon-heart" value="icon-heart">&#xe950;  icon-heart</option>
        <option data-icon="icon icon-flash" className="icon icon-flash" value="icon-flash">&#xe951;  icon-flash</option>
        <option data-icon="icon icon-cancel" className="icon icon-cancel" value="icon-cancel">&#xe952;  icon-cancel</option>
        <option data-icon="icon icon-backspace" className="icon icon-backspace" value="icon-backspace">&#xe953;  icon-backspace</option>
        <option data-icon="icon icon-attachment" className="icon icon-attachment" value="icon-attachment">&#xe954;  icon-attachment</option>
        <option data-icon="icon icon-arrow-move" className="icon icon-arrow-move" value="icon-arrow-move">&#xe955;  icon-arrow-move</option>
        <option data-icon="icon icon-warning" className="icon icon-warning" value="icon-warning">&#xe956;  icon-warning</option>
        <option data-icon="icon icon-user" className="icon icon-user" value="icon-user">&#xe957;  icon-user</option>
        <option data-icon="icon icon-radar" className="icon icon-radar" value="icon-radar">&#xe958;  icon-radar</option>
        <option data-icon="icon icon-lock-open" className="icon icon-lock-open" value="icon-lock-open">&#xe959;  icon-lock-open</option>
        <option data-icon="icon icon-lock-closed" className="icon icon-lock-closed" value="icon-lock-closed">&#xe95a;  icon-lock-closed</option>
        <option data-icon="icon icon-location-arrow" className="icon icon-location-arrow" value="icon-location-arrow">&#xe95b;  icon-location-arrow</option>
        <option data-icon="icon icon-info" className="icon icon-info" value="icon-info">&#xe95c;  icon-info</option>
        <option data-icon="icon icon-user-delete" className="icon icon-user-delete" value="icon-user-delete">&#xe95d;  icon-user-delete</option>
        <option data-icon="icon icon-user-add" className="icon icon-user-add" value="icon-user-add">&#xe95e;  icon-user-add</option>
        <option data-icon="icon icon-media-pause" className="icon icon-media-pause" value="icon-media-pause">&#xe95f;  icon-media-pause</option>
        <option data-icon="icon icon-group" className="icon icon-group" value="icon-group">&#xe960;  icon-group</option>
        <option data-icon="icon icon-chart-pie" className="icon icon-chart-pie" value="icon-chart-pie">&#xe961;  icon-chart-pie</option>
        <option data-icon="icon icon-chart-line" className="icon icon-chart-line" value="icon-chart-line">&#xe962;  icon-chart-line</option>
        <option data-icon="icon icon-chart-bar" className="icon icon-chart-bar" value="icon-chart-bar">&#xe963;  icon-chart-bar</option>
        <option data-icon="icon icon-chart-area" className="icon icon-chart-area" value="icon-chart-area">&#xe964;  icon-chart-area</option>
        <option data-icon="icon icon-video" className="icon icon-video" value="icon-video">&#xe965;  icon-video</option>
        <option data-icon="icon icon-point-of-interest" className="icon icon-point-of-interest" value="icon-point-of-interest">&#xe966;  icon-point-of-interest</option>
        <option data-icon="icon icon-infinity" className="icon icon-infinity" value="icon-infinity">&#xe967;  icon-infinity</option>
        <option data-icon="icon icon-globe" className="icon icon-globe" value="icon-globe">&#xe968;  icon-globe</option>
        <option data-icon="icon icon-eye" className="icon icon-eye" value="icon-eye">&#xe969;  icon-eye</option>
        <option data-icon="icon icon-cog" className="icon icon-cog" value="icon-cog">&#xe96a;  icon-cog</option>
        <option data-icon="icon icon-camera" className="icon icon-camera" value="icon-camera">&#xe96b;  icon-camera</option>
        <option data-icon="icon icon-upload" className="icon icon-upload" value="icon-upload">&#xe96c;  icon-upload</option>
        <option data-icon="icon icon-scissors" className="icon icon-scissors" value="icon-scissors">&#xe96d;  icon-scissors</option>
        <option data-icon="icon icon-refresh" className="icon icon-refresh" value="icon-refresh">&#xe96e;  icon-refresh</option>
        <option data-icon="icon icon-pin" className="icon icon-pin" value="icon-pin">&#xe96f;  icon-pin</option>
        <option data-icon="icon icon-key" className="icon icon-key" value="icon-key">&#xe970;  icon-key</option>
        <option data-icon="icon icon-info-large" className="icon icon-info-large" value="icon-info-large">&#xe971;  icon-info-large</option>
        <option data-icon="icon icon-eject" className="icon icon-eject" value="icon-eject">&#xe972;  icon-eject</option>
        <option data-icon="icon icon-download" className="icon icon-download" value="icon-download">&#xe973;  icon-download</option>
        <option data-icon="icon icon-zoom" className="icon icon-zoom" value="icon-zoom">&#xe974;  icon-zoom</option>
        <option data-icon="icon icon-zoom-out" className="icon icon-zoom-out" value="icon-zoom-out">&#xe975;  icon-zoom-out</option>
        <option data-icon="icon icon-zoom-in" className="icon icon-zoom-in" value="icon-zoom-in">&#xe976;  icon-zoom-in</option>
        <option data-icon="icon icon-sort-numerically" className="icon icon-sort-numerically" value="icon-sort-numerically">&#xe977;  icon-sort-numerically</option>
        <option data-icon="icon icon-sort-alphabetically" className="icon icon-sort-alphabetically" value="icon-sort-alphabetically">&#xe978;  icon-sort-alphabetically</option>
        <option data-icon="icon icon-input-checked" className="icon icon-input-checked" value="icon-input-checked">&#xe979;  icon-input-checked</option>
        <option data-icon="icon icon-calender" className="icon icon-calender" value="icon-calender">&#xe97a;  icon-calender</option>
        <option data-icon="icon icon-world2" className="icon icon-world2" value="icon-world2">&#xe97b;  icon-world2</option>
        <option data-icon="icon icon-notes" className="icon icon-notes" value="icon-notes">&#xe97c;  icon-notes</option>
        <option data-icon="icon icon-code" className="icon icon-code" value="icon-code">&#xe97d;  icon-code</option>
        <option data-icon="icon icon-arrow-sync" className="icon icon-arrow-sync" value="icon-arrow-sync">&#xe97e;  icon-arrow-sync</option>
        <option data-icon="icon icon-arrow-shuffle" className="icon icon-arrow-shuffle" value="icon-arrow-shuffle">&#xe97f;  icon-arrow-shuffle</option>
        <option data-icon="icon icon-arrow-repeat" className="icon icon-arrow-repeat" value="icon-arrow-repeat">&#xe980;  icon-arrow-repeat</option>
        <option data-icon="icon icon-arrow-minimise" className="icon icon-arrow-minimise" value="icon-arrow-minimise">&#xe981;  icon-arrow-minimise</option>
        <option data-icon="icon icon-arrow-maximise" className="icon icon-arrow-maximise" value="icon-arrow-maximise">&#xe982;  icon-arrow-maximise</option>
        <option data-icon="icon icon-arrow-loop" className="icon icon-arrow-loop" value="icon-arrow-loop">&#xe983;  icon-arrow-loop</option>
        <option data-icon="icon icon-anchor" className="icon icon-anchor" value="icon-anchor">&#xe984;  icon-anchor</option>
        <option data-icon="icon icon-spanner" className="icon icon-spanner" value="icon-spanner">&#xe985;  icon-spanner</option>
        <option data-icon="icon icon-puzzle" className="icon icon-puzzle" value="icon-puzzle">&#xe986;  icon-puzzle</option>
        <option data-icon="icon icon-power" className="icon icon-power" value="icon-power">&#xe987;  icon-power</option>
        <option data-icon="icon icon-plane" className="icon icon-plane" value="icon-plane">&#xe988;  icon-plane</option>
        <option data-icon="icon icon-pi" className="icon icon-pi" value="icon-pi">&#xe989;  icon-pi</option>
        <option data-icon="icon icon-phone" className="icon icon-phone" value="icon-phone">&#xe98a;  icon-phone</option>
        <option data-icon="icon icon-microphone2" className="icon icon-microphone2" value="icon-microphone2">&#xe98b;  icon-microphone2</option>
        <option data-icon="icon icon-media-rewind" className="icon icon-media-rewind" value="icon-media-rewind">&#xe98c;  icon-media-rewind</option>
        <option data-icon="icon icon-flag" className="icon icon-flag" value="icon-flag">&#xe98d;  icon-flag</option>
        <option data-icon="icon icon-adjust-brightness" className="icon icon-adjust-brightness" value="icon-adjust-brightness">&#xe98e;  icon-adjust-brightness</option>
        <option data-icon="icon icon-waves" className="icon icon-waves" value="icon-waves">&#xe98f;  icon-waves</option>
        <option data-icon="icon icon-social-twitter" className="icon icon-social-twitter" value="icon-social-twitter">&#xe990;  icon-social-twitter</option>
        <option data-icon="icon icon-social-facebook" className="icon icon-social-facebook" value="icon-social-facebook">&#xe991;  icon-social-facebook</option>
        <option data-icon="icon icon-social-dribbble" className="icon icon-social-dribbble" value="icon-social-dribbble">&#xe992;  icon-social-dribbble</option>
        <option data-icon="icon icon-media-stop" className="icon icon-media-stop" value="icon-media-stop">&#xe993;  icon-media-stop</option>
        <option data-icon="icon icon-media-record" className="icon icon-media-record" value="icon-media-record">&#xe994;  icon-media-record</option>
        <option data-icon="icon icon-media-play" className="icon icon-media-play" value="icon-media-play">&#xe995;  icon-media-play</option>
        <option data-icon="icon icon-media-fast-forward" className="icon icon-media-fast-forward" value="icon-media-fast-forward">&#xe996;  icon-media-fast-forward</option>
        <option data-icon="icon icon-media-eject" className="icon icon-media-eject" value="icon-media-eject">&#xe997;  icon-media-eject</option>
        <option data-icon="icon icon-social-vimeo" className="icon icon-social-vimeo" value="icon-social-vimeo">&#xe998;  icon-social-vimeo</option>
        <option data-icon="icon icon-social-tumbler" className="icon icon-social-tumbler" value="icon-social-tumbler">&#xe999;  icon-social-tumbler</option>
        <option data-icon="icon icon-social-skype" className="icon icon-social-skype" value="icon-social-skype">&#xe99a;  icon-social-skype</option>
        <option data-icon="icon icon-social-pinterest" className="icon icon-social-pinterest" value="icon-social-pinterest">&#xe99b;  icon-social-pinterest</option>
        <option data-icon="icon icon-social-linkedin" className="icon icon-social-linkedin" value="icon-social-linkedin">&#xe99c;  icon-social-linkedin</option>
        <option data-icon="icon icon-social-last-fm" className="icon icon-social-last-fm" value="icon-social-last-fm">&#xe99d;  icon-social-last-fm</option>
        <option data-icon="icon icon-social-github" className="icon icon-social-github" value="icon-social-github">&#xe99e;  icon-social-github</option>
        <option data-icon="icon icon-social-flickr" className="icon icon-social-flickr" value="icon-social-flickr">&#xe99f;  icon-social-flickr</option>
        <option data-icon="icon icon-at" className="icon icon-at" value="icon-at">&#xe9a0;  icon-at</option>
        <option data-icon="icon icon-times-outline" className="icon icon-times-outline" value="icon-times-outline">&#xe9a1;  icon-times-outline</option>
        <option data-icon="icon icon-plus-outline" className="icon icon-plus-outline" value="icon-plus-outline">&#xe9a2;  icon-plus-outline</option>
        <option data-icon="icon icon-minus-outline" className="icon icon-minus-outline" value="icon-minus-outline">&#xe9a3;  icon-minus-outline</option>
        <option data-icon="icon icon-tick-outline" className="icon icon-tick-outline" value="icon-tick-outline">&#xe9a4;  icon-tick-outline</option>
        <option data-icon="icon icon-th-large-outline" className="icon icon-th-large-outline" value="icon-th-large-outline">&#xe9a5;  icon-th-large-outline</option>
        <option data-icon="icon icon-equals-outline" className="icon icon-equals-outline" value="icon-equals-outline">&#xe9a6;  icon-equals-outline</option>
        <option data-icon="icon icon-divide-outline" className="icon icon-divide-outline" value="icon-divide-outline">&#xe9a7;  icon-divide-outline</option>
        <option data-icon="icon icon-chevron-right-outline" className="icon icon-chevron-right-outline" value="icon-chevron-right-outline">&#xe9a8;  icon-chevron-right-outline</option>
        <option data-icon="icon icon-chevron-left-outline" className="icon icon-chevron-left-outline" value="icon-chevron-left-outline">&#xe9a9;  icon-chevron-left-outline</option>
        <option data-icon="icon icon-arrow-right-outline" className="icon icon-arrow-right-outline" value="icon-arrow-right-outline">&#xe9aa;  icon-arrow-right-outline</option>
        <option data-icon="icon icon-arrow-left-outline" className="icon icon-arrow-left-outline" value="icon-arrow-left-outline">&#xe9ab;  icon-arrow-left-outline</option>
        <option data-icon="icon icon-th-small-outline" className="icon icon-th-small-outline" value="icon-th-small-outline">&#xe9ac;  icon-th-small-outline</option>
        <option data-icon="icon icon-th-menu-outline" className="icon icon-th-menu-outline" value="icon-th-menu-outline">&#xe9ad;  icon-th-menu-outline</option>
        <option data-icon="icon icon-th-list-outline" className="icon icon-th-list-outline" value="icon-th-list-outline">&#xe9ae;  icon-th-list-outline</option>
        <option data-icon="icon icon-news2" className="icon icon-news2" value="icon-news2">&#xe9b1;  icon-news2</option>
        <option data-icon="icon icon-home-outline" className="icon icon-home-outline" value="icon-home-outline">&#xe9b2;  icon-home-outline</option>
        <option data-icon="icon icon-arrow-up-outline" className="icon icon-arrow-up-outline" value="icon-arrow-up-outline">&#xe9b3;  icon-arrow-up-outline</option>
        <option data-icon="icon icon-arrow-forward-outline" className="icon icon-arrow-forward-outline" value="icon-arrow-forward-outline">&#xe9b4;  icon-arrow-forward-outline</option>
        <option data-icon="icon icon-arrow-down-outline" className="icon icon-arrow-down-outline" value="icon-arrow-down-outline">&#xe9b5;  icon-arrow-down-outline</option>
        <option data-icon="icon icon-arrow-back-outline" className="icon icon-arrow-back-outline" value="icon-arrow-back-outline">&#xe9b6;  icon-arrow-back-outline</option>
        <option data-icon="icon icon-trash3" className="icon icon-trash3" value="icon-trash3">&#xe9b7;  icon-trash3</option>
        <option data-icon="icon icon-rss-outline" className="icon icon-rss-outline" value="icon-rss-outline">&#xe9b8;  icon-rss-outline</option>
        <option data-icon="icon icon-message" className="icon icon-message" value="icon-message">&#xe9b9;  icon-message</option>
        <option data-icon="icon icon-location-outline" className="icon icon-location-outline" value="icon-location-outline">&#xe9ba;  icon-location-outline</option>
        <option data-icon="icon icon-link-outline" className="icon icon-link-outline" value="icon-link-outline">&#xe9bb;  icon-link-outline</option>
        <option data-icon="icon icon-image-outline" className="icon icon-image-outline" value="icon-image-outline">&#xe9bc;  icon-image-outline</option>
        <option data-icon="icon icon-export-outline" className="icon icon-export-outline" value="icon-export-outline">&#xe9bd;  icon-export-outline</option>
        <option data-icon="icon icon-cross" className="icon icon-cross" value="icon-cross">&#xe9be;  icon-cross</option>
        <option data-icon="icon icon-wi-fi-outline" className="icon icon-wi-fi-outline" value="icon-wi-fi-outline">&#xe9bf;  icon-wi-fi-outline</option>
        <option data-icon="icon icon-star-outline" className="icon icon-star-outline" value="icon-star-outline">&#xe9c0;  icon-star-outline</option>
        <option data-icon="icon icon-media-pause-outline" className="icon icon-media-pause-outline" value="icon-media-pause-outline">&#xe9c1;  icon-media-pause-outline</option>
        <option data-icon="icon icon-mail" className="icon icon-mail" value="icon-mail">&#xe9c2;  icon-mail</option>
        <option data-icon="icon icon-heart-outline" className="icon icon-heart-outline" value="icon-heart-outline">&#xe9c3;  icon-heart-outline</option>
        <option data-icon="icon icon-flash-outline" className="icon icon-flash-outline" value="icon-flash-outline">&#xe9c4;  icon-flash-outline</option>
        <option data-icon="icon icon-cancel-outline" className="icon icon-cancel-outline" value="icon-cancel-outline">&#xe9c5;  icon-cancel-outline</option>
        <option data-icon="icon icon-beaker" className="icon icon-beaker" value="icon-beaker">&#xe9c6;  icon-beaker</option>
        <option data-icon="icon icon-arrow-move-outline" className="icon icon-arrow-move-outline" value="icon-arrow-move-outline">&#xe9c7;  icon-arrow-move-outline</option>
        <option data-icon="icon icon-watch2" className="icon icon-watch2" value="icon-watch2">&#xe9c8;  icon-watch2</option>
        <option data-icon="icon icon-warning-outline" className="icon icon-warning-outline" value="icon-warning-outline">&#xe9c9;  icon-warning-outline</option>
        <option data-icon="icon icon-time" className="icon icon-time" value="icon-time">&#xe9ca;  icon-time</option>
        <option data-icon="icon icon-radar-outline" className="icon icon-radar-outline" value="icon-radar-outline">&#xe9cb;  icon-radar-outline</option>
        <option data-icon="icon icon-lock-open-outline" className="icon icon-lock-open-outline" value="icon-lock-open-outline">&#xe9cc;  icon-lock-open-outline</option>
        <option data-icon="icon icon-location-arrow-outline" className="icon icon-location-arrow-outline" value="icon-location-arrow-outline">&#xe9cd;  icon-location-arrow-outline</option>
        <option data-icon="icon icon-info-outline" className="icon icon-info-outline" value="icon-info-outline">&#xe9ce;  icon-info-outline</option>
        <option data-icon="icon icon-backspace-outline" className="icon icon-backspace-outline" value="icon-backspace-outline">&#xe9cf;  icon-backspace-outline</option>
        <option data-icon="icon icon-attachment-outline" className="icon icon-attachment-outline" value="icon-attachment-outline">&#xe9d0;  icon-attachment-outline</option>
        <option data-icon="icon icon-user-outline" className="icon icon-user-outline" value="icon-user-outline">&#xe9d1;  icon-user-outline</option>
        <option data-icon="icon icon-user-delete-outline" className="icon icon-user-delete-outline" value="icon-user-delete-outline">&#xe9d2;  icon-user-delete-outline</option>
        <option data-icon="icon icon-user-add-outline" className="icon icon-user-add-outline" value="icon-user-add-outline">&#xe9d3;  icon-user-add-outline</option>
        <option data-icon="icon icon-lock-closed-outline" className="icon icon-lock-closed-outline" value="icon-lock-closed-outline">&#xe9d4;  icon-lock-closed-outline</option>
        <option data-icon="icon icon-group-outline" className="icon icon-group-outline" value="icon-group-outline">&#xe9d5;  icon-group-outline</option>
        <option data-icon="icon icon-chart-pie-outline" className="icon icon-chart-pie-outline" value="icon-chart-pie-outline">&#xe9d6;  icon-chart-pie-outline</option>
        <option data-icon="icon icon-chart-line-outline" className="icon icon-chart-line-outline" value="icon-chart-line-outline">&#xe9d7;  icon-chart-line-outline</option>
        <option data-icon="icon icon-chart-bar-outline" className="icon icon-chart-bar-outline" value="icon-chart-bar-outline">&#xe9d8;  icon-chart-bar-outline</option>
        <option data-icon="icon icon-chart-area-outline" className="icon icon-chart-area-outline" value="icon-chart-area-outline">&#xe9d9;  icon-chart-area-outline</option>
        <option data-icon="icon icon-video-outline" className="icon icon-video-outline" value="icon-video-outline">&#xe9da;  icon-video-outline</option>
        <option data-icon="icon icon-point-of-interest-outline" className="icon icon-point-of-interest-outline" value="icon-point-of-interest-outline">&#xe9db;  icon-point-of-interest-outline</option>
        <option data-icon="icon icon-map" className="icon icon-map" value="icon-map">&#xe9dc;  icon-map</option>
        <option data-icon="icon icon-key-outline" className="icon icon-key-outline" value="icon-key-outline">&#xe9dd;  icon-key-outline</option>
        <option data-icon="icon icon-infinity-outline" className="icon icon-infinity-outline" value="icon-infinity-outline">&#xe9de;  icon-infinity-outline</option>
        <option data-icon="icon icon-globe-outline" className="icon icon-globe-outline" value="icon-globe-outline">&#xe9df;  icon-globe-outline</option>
        <option data-icon="icon icon-eye-outline" className="icon icon-eye-outline" value="icon-eye-outline">&#xe9e0;  icon-eye-outline</option>
        <option data-icon="icon icon-cog-outline" className="icon icon-cog-outline" value="icon-cog-outline">&#xe9e1;  icon-cog-outline</option>
        <option data-icon="icon icon-camera-outline" className="icon icon-camera-outline" value="icon-camera-outline">&#xe9e2;  icon-camera-outline</option>
        <option data-icon="icon icon-upload-outline" className="icon icon-upload-outline" value="icon-upload-outline">&#xe9e3;  icon-upload-outline</option>
        <option data-icon="icon icon-support" className="icon icon-support" value="icon-support">&#xe9e4;  icon-support</option>
        <option data-icon="icon icon-scissors-outline" className="icon icon-scissors-outline" value="icon-scissors-outline">&#xe9e5;  icon-scissors-outline</option>
        <option data-icon="icon icon-refresh-outline" className="icon icon-refresh-outline" value="icon-refresh-outline">&#xe9e6;  icon-refresh-outline</option>
        <option data-icon="icon icon-info-large-outline" className="icon icon-info-large-outline" value="icon-info-large-outline">&#xe9e7;  icon-info-large-outline</option>
        <option data-icon="icon icon-eject-outline" className="icon icon-eject-outline" value="icon-eject-outline">&#xe9e8;  icon-eject-outline</option>
        <option data-icon="icon icon-download-outline" className="icon icon-download-outline" value="icon-download-outline">&#xe9e9;  icon-download-outline</option>
        <option data-icon="icon icon-battery-mid" className="icon icon-battery-mid" value="icon-battery-mid">&#xe9ea;  icon-battery-mid</option>
        <option data-icon="icon icon-battery-low" className="icon icon-battery-low" value="icon-battery-low">&#xe9eb;  icon-battery-low</option>
        <option data-icon="icon icon-battery-high" className="icon icon-battery-high" value="icon-battery-high">&#xe9ec;  icon-battery-high</option>
        <option data-icon="icon icon-zoom-outline" className="icon icon-zoom-outline" value="icon-zoom-outline">&#xe9ed;  icon-zoom-outline</option>
        <option data-icon="icon icon-zoom-out-outline" className="icon icon-zoom-out-outline" value="icon-zoom-out-outline">&#xe9ee;  icon-zoom-out-outline</option>
        <option data-icon="icon icon-zoom-in-outline" className="icon icon-zoom-in-outline" value="icon-zoom-in-outline">&#xe9ef;  icon-zoom-in-outline</option>
        <option data-icon="icon icon-tag3" className="icon icon-tag3" value="icon-tag3">&#xe9f0;  icon-tag3</option>
        <option data-icon="icon icon-tabs-outline" className="icon icon-tabs-outline" value="icon-tabs-outline">&#xe9f1;  icon-tabs-outline</option>
        <option data-icon="icon icon-pin-outline" className="icon icon-pin-outline" value="icon-pin-outline">&#xe9f2;  icon-pin-outline</option>
        <option data-icon="icon icon-message-typing" className="icon icon-message-typing" value="icon-message-typing">&#xe9f3;  icon-message-typing</option>
        <option data-icon="icon icon-directions" className="icon icon-directions" value="icon-directions">&#xe9f4;  icon-directions</option>
        <option data-icon="icon icon-battery-full" className="icon icon-battery-full" value="icon-battery-full">&#xe9f5;  icon-battery-full</option>
        <option data-icon="icon icon-battery-charge" className="icon icon-battery-charge" value="icon-battery-charge">&#xe9f6;  icon-battery-charge</option>
        <option data-icon="icon icon-pipette" className="icon icon-pipette" value="icon-pipette">&#xe9f7;  icon-pipette</option>
        <option data-icon="icon icon-pencil" className="icon icon-pencil" value="icon-pencil">&#xe9f8;  icon-pencil</option>
        <option data-icon="icon icon-folder" className="icon icon-folder" value="icon-folder">&#xe9f9;  icon-folder</option>
        <option data-icon="icon icon-folder-delete" className="icon icon-folder-delete" value="icon-folder-delete">&#xe9fa;  icon-folder-delete</option>
        <option data-icon="icon icon-folder-add" className="icon icon-folder-add" value="icon-folder-add">&#xe9fb;  icon-folder-add</option>
        <option data-icon="icon icon-edit" className="icon icon-edit" value="icon-edit">&#xe9fc;  icon-edit</option>
        <option data-icon="icon icon-document" className="icon icon-document" value="icon-document">&#xe9fd;  icon-document</option>
        <option data-icon="icon icon-document-delete" className="icon icon-document-delete" value="icon-document-delete">&#xe9fe;  icon-document-delete</option>
        <option data-icon="icon icon-document-add" className="icon icon-document-add" value="icon-document-add">&#xe9ff;  icon-document-add</option>
        <option data-icon="icon icon-brush" className="icon icon-brush" value="icon-brush">&#xea00;  icon-brush</option>
        <option data-icon="icon icon-thumbs-up" className="icon icon-thumbs-up" value="icon-thumbs-up">&#xea01;  icon-thumbs-up</option>
        <option data-icon="icon icon-thumbs-down" className="icon icon-thumbs-down" value="icon-thumbs-down">&#xea02;  icon-thumbs-down</option>
        <option data-icon="icon icon-pen" className="icon icon-pen" value="icon-pen">&#xea03;  icon-pen</option>
        <option data-icon="icon icon-sort-numerically-outline" className="icon icon-sort-numerically-outline" value="icon-sort-numerically-outline">&#xea04;  icon-sort-numerically-outline</option>
        <option data-icon="icon icon-sort-alphabetically-outline" className="icon icon-sort-alphabetically-outline" value="icon-sort-alphabetically-outline">&#xea05;  icon-sort-alphabetically-outline</option>
        <option data-icon="icon icon-social-last-fm-circular" className="icon icon-social-last-fm-circular" value="icon-social-last-fm-circular">&#xea06;  icon-social-last-fm-circular</option>
        <option data-icon="icon icon-social-github-circular" className="icon icon-social-github-circular" value="icon-social-github-circular">&#xea07;  icon-social-github-circular</option>
        <option data-icon="icon icon-compass" className="icon icon-compass" value="icon-compass">&#xea08;  icon-compass</option>
        <option data-icon="icon icon-bookmark" className="icon icon-bookmark" value="icon-bookmark">&#xea09;  icon-bookmark</option>
        <option data-icon="icon icon-input-checked-outline" className="icon icon-input-checked-outline" value="icon-input-checked-outline">&#xea0a;  icon-input-checked-outline</option>
        <option data-icon="icon icon-code-outline" className="icon icon-code-outline" value="icon-code-outline">&#xea0b;  icon-code-outline</option>
        <option data-icon="icon icon-calender-outline" className="icon icon-calender-outline" value="icon-calender-outline">&#xea0c;  icon-calender-outline</option>
        <option data-icon="icon icon-business-card" className="icon icon-business-card" value="icon-business-card">&#xea0d;  icon-business-card</option>
        <option data-icon="icon icon-arrow-up" className="icon icon-arrow-up" value="icon-arrow-up">&#xea0e;  icon-arrow-up</option>
        <option data-icon="icon icon-arrow-sync-outline" className="icon icon-arrow-sync-outline" value="icon-arrow-sync-outline">&#xea0f;  icon-arrow-sync-outline</option>
        <option data-icon="icon icon-arrow-right" className="icon icon-arrow-right" value="icon-arrow-right">&#xea10;  icon-arrow-right</option>
        <option data-icon="icon icon-arrow-repeat-outline" className="icon icon-arrow-repeat-outline" value="icon-arrow-repeat-outline">&#xea11;  icon-arrow-repeat-outline</option>
        <option data-icon="icon icon-arrow-loop-outline" className="icon icon-arrow-loop-outline" value="icon-arrow-loop-outline">&#xea12;  icon-arrow-loop-outline</option>
        <option data-icon="icon icon-arrow-left" className="icon icon-arrow-left" value="icon-arrow-left">&#xea13;  icon-arrow-left</option>
        <option data-icon="icon icon-flow-switch" className="icon icon-flow-switch" value="icon-flow-switch">&#xea14;  icon-flow-switch</option>
        <option data-icon="icon icon-flow-parallel" className="icon icon-flow-parallel" value="icon-flow-parallel">&#xea15;  icon-flow-parallel</option>
        <option data-icon="icon icon-flow-merge" className="icon icon-flow-merge" value="icon-flow-merge">&#xea16;  icon-flow-merge</option>
        <option data-icon="icon icon-document-text" className="icon icon-document-text" value="icon-document-text">&#xea17;  icon-document-text</option>
        <option data-icon="icon icon-clipboard" className="icon icon-clipboard" value="icon-clipboard">&#xea18;  icon-clipboard</option>
        <option data-icon="icon icon-calculator" className="icon icon-calculator" value="icon-calculator">&#xea19;  icon-calculator</option>
        <option data-icon="icon icon-arrow-minimise-outline" className="icon icon-arrow-minimise-outline" value="icon-arrow-minimise-outline">&#xea1a;  icon-arrow-minimise-outline</option>
        <option data-icon="icon icon-arrow-maximise-outline" className="icon icon-arrow-maximise-outline" value="icon-arrow-maximise-outline">&#xea1b;  icon-arrow-maximise-outline</option>
        <option data-icon="icon icon-arrow-down" className="icon icon-arrow-down" value="icon-arrow-down">&#xea1c;  icon-arrow-down</option>
        <option data-icon="icon icon-gift" className="icon icon-gift" value="icon-gift">&#xea1d;  icon-gift</option>
        <option data-icon="icon icon-film" className="icon icon-film" value="icon-film">&#xea1e;  icon-film</option>
        <option data-icon="icon icon-database" className="icon icon-database" value="icon-database">&#xea1f;  icon-database</option>
        <option data-icon="icon icon-bell" className="icon icon-bell" value="icon-bell">&#xea20;  icon-bell</option>
        <option data-icon="icon icon-anchor-outline" className="icon icon-anchor-outline" value="icon-anchor-outline">&#xea21;  icon-anchor-outline</option>
        <option data-icon="icon icon-adjust-contrast" className="icon icon-adjust-contrast" value="icon-adjust-contrast">&#xea22;  icon-adjust-contrast</option>
        <option data-icon="icon icon-world-outline" className="icon icon-world-outline" value="icon-world-outline">&#xea23;  icon-world-outline</option>
        <option data-icon="icon icon-shopping-bag" className="icon icon-shopping-bag" value="icon-shopping-bag">&#xea24;  icon-shopping-bag</option>
        <option data-icon="icon icon-power-outline" className="icon icon-power-outline" value="icon-power-outline">&#xea25;  icon-power-outline</option>
        <option data-icon="icon icon-notes-outline" className="icon icon-notes-outline" value="icon-notes-outline">&#xea26;  icon-notes-outline</option>
        <option data-icon="icon icon-device-tablet" className="icon icon-device-tablet" value="icon-device-tablet">&#xea27;  icon-device-tablet</option>
        <option data-icon="icon icon-device-phone" className="icon icon-device-phone" value="icon-device-phone">&#xea28;  icon-device-phone</option>
        <option data-icon="icon icon-device-laptop" className="icon icon-device-laptop" value="icon-device-laptop">&#xea29;  icon-device-laptop</option>
        <option data-icon="icon icon-device-desktop" className="icon icon-device-desktop" value="icon-device-desktop">&#xea2a;  icon-device-desktop</option>
        <option data-icon="icon icon-briefcase" className="icon icon-briefcase" value="icon-briefcase">&#xea2b;  icon-briefcase</option>
        <option data-icon="icon icon-stopwatch" className="icon icon-stopwatch" value="icon-stopwatch">&#xea2c;  icon-stopwatch</option>
        <option data-icon="icon icon-spanner-outline" className="icon icon-spanner-outline" value="icon-spanner-outline">&#xea2d;  icon-spanner-outline</option>
        <option data-icon="icon icon-puzzle-outline" className="icon icon-puzzle-outline" value="icon-puzzle-outline">&#xea2e;  icon-puzzle-outline</option>
        <option data-icon="icon icon-printer" className="icon icon-printer" value="icon-printer">&#xea2f;  icon-printer</option>
        <option data-icon="icon icon-pi-outline" className="icon icon-pi-outline" value="icon-pi-outline">&#xea30;  icon-pi-outline</option>
        <option data-icon="icon icon-lightbulb" className="icon icon-lightbulb" value="icon-lightbulb">&#xea31;  icon-lightbulb</option>
        <option data-icon="icon icon-flag-outline" className="icon icon-flag-outline" value="icon-flag-outline">&#xea32;  icon-flag-outline</option>
        <option data-icon="icon icon-contacts" className="icon icon-contacts" value="icon-contacts">&#xea33;  icon-contacts</option>
        <option data-icon="icon icon-archive2" className="icon icon-archive2" value="icon-archive2">&#xea34;  icon-archive2</option>
        <option data-icon="icon icon-weather-stormy" className="icon icon-weather-stormy" value="icon-weather-stormy">&#xea35;  icon-weather-stormy</option>
        <option data-icon="icon icon-weather-shower" className="icon icon-weather-shower" value="icon-weather-shower">&#xea36;  icon-weather-shower</option>
        <option data-icon="icon icon-weather-partly-sunny" className="icon icon-weather-partly-sunny" value="icon-weather-partly-sunny">&#xea37;  icon-weather-partly-sunny</option>
        <option data-icon="icon icon-weather-downpour" className="icon icon-weather-downpour" value="icon-weather-downpour">&#xea38;  icon-weather-downpour</option>
        <option data-icon="icon icon-weather-cloudy" className="icon icon-weather-cloudy" value="icon-weather-cloudy">&#xea39;  icon-weather-cloudy</option>
        <option data-icon="icon icon-plane-outline" className="icon icon-plane-outline" value="icon-plane-outline">&#xea3a;  icon-plane-outline</option>
        <option data-icon="icon icon-phone-outline" className="icon icon-phone-outline" value="icon-phone-outline">&#xea3b;  icon-phone-outline</option>
        <option data-icon="icon icon-microphone-outline" className="icon icon-microphone-outline" value="icon-microphone-outline">&#xea3c;  icon-microphone-outline</option>
        <option data-icon="icon icon-weather-windy" className="icon icon-weather-windy" value="icon-weather-windy">&#xea3d;  icon-weather-windy</option>
        <option data-icon="icon icon-weather-windy-cloudy" className="icon icon-weather-windy-cloudy" value="icon-weather-windy-cloudy">&#xea3e;  icon-weather-windy-cloudy</option>
        <option data-icon="icon icon-weather-sunny" className="icon icon-weather-sunny" value="icon-weather-sunny">&#xea3f;  icon-weather-sunny</option>
        <option data-icon="icon icon-weather-snow" className="icon icon-weather-snow" value="icon-weather-snow">&#xea40;  icon-weather-snow</option>
        <option data-icon="icon icon-weather-night" className="icon icon-weather-night" value="icon-weather-night">&#xea41;  icon-weather-night</option>
        <option data-icon="icon icon-media-stop-outline" className="icon icon-media-stop-outline" value="icon-media-stop-outline">&#xea42;  icon-media-stop-outline</option>
        <option data-icon="icon icon-media-rewind-outline" className="icon icon-media-rewind-outline" value="icon-media-rewind-outline">&#xea43;  icon-media-rewind-outline</option>
        <option data-icon="icon icon-media-record-outline" className="icon icon-media-record-outline" value="icon-media-record-outline">&#xea44;  icon-media-record-outline</option>
        <option data-icon="icon icon-media-play-outline" className="icon icon-media-play-outline" value="icon-media-play-outline">&#xea45;  icon-media-play-outline</option>
        <option data-icon="icon icon-media-fast-forward-outline" className="icon icon-media-fast-forward-outline" value="icon-media-fast-forward-outline">&#xea46;  icon-media-fast-forward-outline</option>
        <option data-icon="icon icon-media-eject-outline" className="icon icon-media-eject-outline" value="icon-media-eject-outline">&#xea47;  icon-media-eject-outline</option>
        <option data-icon="icon icon-wine" className="icon icon-wine" value="icon-wine">&#xea48;  icon-wine</option>
        <option data-icon="icon icon-waves-outline" className="icon icon-waves-outline" value="icon-waves-outline">&#xea49;  icon-waves-outline</option>
        <option data-icon="icon icon-ticket" className="icon icon-ticket" value="icon-ticket">&#xea4a;  icon-ticket</option>
        <option data-icon="icon icon-tags" className="icon icon-tags" value="icon-tags">&#xea4b;  icon-tags</option>
        <option data-icon="icon icon-plug" className="icon icon-plug" value="icon-plug">&#xea4c;  icon-plug</option>
        <option data-icon="icon icon-headphones" className="icon icon-headphones" value="icon-headphones">&#xea4d;  icon-headphones</option>
        <option data-icon="icon icon-credit-card" className="icon icon-credit-card" value="icon-credit-card">&#xea4e;  icon-credit-card</option>
        <option data-icon="icon icon-coffee" className="icon icon-coffee" value="icon-coffee">&#xea4f;  icon-coffee</option>
        <option data-icon="icon icon-book" className="icon icon-book" value="icon-book">&#xea50;  icon-book</option>
        <option data-icon="icon icon-beer" className="icon icon-beer" value="icon-beer">&#xea51;  icon-beer</option>
        <option data-icon="icon icon-volume2" className="icon icon-volume2" value="icon-volume2">&#xea52;  icon-volume2</option>
        <option data-icon="icon icon-volume-up" className="icon icon-volume-up" value="icon-volume-up">&#xea53;  icon-volume-up</option>
        <option data-icon="icon icon-volume-mute" className="icon icon-volume-mute" value="icon-volume-mute">&#xea54;  icon-volume-mute</option>
        <option data-icon="icon icon-volume-down" className="icon icon-volume-down" value="icon-volume-down">&#xea55;  icon-volume-down</option>
        <option data-icon="icon icon-social-vimeo-circular" className="icon icon-social-vimeo-circular" value="icon-social-vimeo-circular">&#xea56;  icon-social-vimeo-circular</option>
        <option data-icon="icon icon-social-twitter-circular" className="icon icon-social-twitter-circular" value="icon-social-twitter-circular">&#xea57;  icon-social-twitter-circular</option>
        <option data-icon="icon icon-social-pinterest-circular" className="icon icon-social-pinterest-circular" value="icon-social-pinterest-circular">&#xea58;  icon-social-pinterest-circular</option>
        <option data-icon="icon icon-social-linkedin-circular" className="icon icon-social-linkedin-circular" value="icon-social-linkedin-circular">&#xea59;  icon-social-linkedin-circular</option>
        <option data-icon="icon icon-social-facebook-circular" className="icon icon-social-facebook-circular" value="icon-social-facebook-circular">&#xea5a;  icon-social-facebook-circular</option>
        <option data-icon="icon icon-social-dribbble-circular" className="icon icon-social-dribbble-circular" value="icon-social-dribbble-circular">&#xea5b;  icon-social-dribbble-circular</option>
        <option data-icon="icon icon-tree" className="icon icon-tree" value="icon-tree">&#xea5c;  icon-tree</option>
        <option data-icon="icon icon-thermometer2" className="icon icon-thermometer2" value="icon-thermometer2">&#xea5d;  icon-thermometer2</option>
        <option data-icon="icon icon-social-tumbler-circular" className="icon icon-social-tumbler-circular" value="icon-social-tumbler-circular">&#xea5e;  icon-social-tumbler-circular</option>
        <option data-icon="icon icon-social-skype-outline" className="icon icon-social-skype-outline" value="icon-social-skype-outline">&#xea5f;  icon-social-skype-outline</option>
        <option data-icon="icon icon-social-flickr-circular" className="icon icon-social-flickr-circular" value="icon-social-flickr-circular">&#xea60;  icon-social-flickr-circular</option>
        <option data-icon="icon icon-social-at-circular" className="icon icon-social-at-circular" value="icon-social-at-circular">&#xea61;  icon-social-at-circular</option>
        <option data-icon="icon icon-shopping-cart" className="icon icon-shopping-cart" value="icon-shopping-cart">&#xea62;  icon-shopping-cart</option>
        <option data-icon="icon icon-messages" className="icon icon-messages" value="icon-messages">&#xea63;  icon-messages</option>
        <option data-icon="icon icon-leaf" className="icon icon-leaf" value="icon-leaf">&#xea64;  icon-leaf</option>
        <option data-icon="icon icon-feather" className="icon icon-feather" value="icon-feather">&#xea65;  icon-feather</option>
        <option data-icon="icon icon-eye2" className="icon icon-eye2" value="icon-eye2">&#xe064;  icon-eye2</option>
        <option data-icon="icon icon-paper-clip" className="icon icon-paper-clip" value="icon-paper-clip">&#xe065;  icon-paper-clip</option>
        <option data-icon="icon icon-mail5" className="icon icon-mail5" value="icon-mail5">&#xe066;  icon-mail5</option>
        <option data-icon="icon icon-toggle" className="icon icon-toggle" value="icon-toggle">&#xe067;  icon-toggle</option>
        <option data-icon="icon icon-layout" className="icon icon-layout" value="icon-layout">&#xe068;  icon-layout</option>
        <option data-icon="icon icon-link2" className="icon icon-link2" value="icon-link2">&#xe069;  icon-link2</option>
        <option data-icon="icon icon-bell2" className="icon icon-bell2" value="icon-bell2">&#xe06a;  icon-bell2</option>
        <option data-icon="icon icon-lock3" className="icon icon-lock3" value="icon-lock3">&#xe06b;  icon-lock3</option>
        <option data-icon="icon icon-unlock" className="icon icon-unlock" value="icon-unlock">&#xe06c;  icon-unlock</option>
        <option data-icon="icon icon-ribbon2" className="icon icon-ribbon2" value="icon-ribbon2">&#xe06d;  icon-ribbon2</option>
        <option data-icon="icon icon-image2" className="icon icon-image2" value="icon-image2">&#xe06e;  icon-image2</option>
        <option data-icon="icon icon-signal" className="icon icon-signal" value="icon-signal">&#xe06f;  icon-signal</option>
        <option data-icon="icon icon-target3" className="icon icon-target3" value="icon-target3">&#xe070;  icon-target3</option>
        <option data-icon="icon icon-clipboard3" className="icon icon-clipboard3" value="icon-clipboard3">&#xe071;  icon-clipboard3</option>
        <option data-icon="icon icon-clock3" className="icon icon-clock3" value="icon-clock3">&#xe072;  icon-clock3</option>
        <option data-icon="icon icon-watch" className="icon icon-watch" value="icon-watch">&#xe073;  icon-watch</option>
        <option data-icon="icon icon-air-play" className="icon icon-air-play" value="icon-air-play">&#xe074;  icon-air-play</option>
        <option data-icon="icon icon-camera3" className="icon icon-camera3" value="icon-camera3">&#xe075;  icon-camera3</option>
        <option data-icon="icon icon-video2" className="icon icon-video2" value="icon-video2">&#xe076;  icon-video2</option>
        <option data-icon="icon icon-disc" className="icon icon-disc" value="icon-disc">&#xe077;  icon-disc</option>
        <option data-icon="icon icon-printer3" className="icon icon-printer3" value="icon-printer3">&#xe078;  icon-printer3</option>
        <option data-icon="icon icon-monitor" className="icon icon-monitor" value="icon-monitor">&#xe079;  icon-monitor</option>
        <option data-icon="icon icon-server" className="icon icon-server" value="icon-server">&#xe07a;  icon-server</option>
        <option data-icon="icon icon-cog2" className="icon icon-cog2" value="icon-cog2">&#xe07b;  icon-cog2</option>
        <option data-icon="icon icon-heart3" className="icon icon-heart3" value="icon-heart3">&#xe07c;  icon-heart3</option>
        <option data-icon="icon icon-paragraph" className="icon icon-paragraph" value="icon-paragraph">&#xe07d;  icon-paragraph</option>
        <option data-icon="icon icon-align-justify" className="icon icon-align-justify" value="icon-align-justify">&#xe07e;  icon-align-justify</option>
        <option data-icon="icon icon-align-left" className="icon icon-align-left" value="icon-align-left">&#xe07f;  icon-align-left</option>
        <option data-icon="icon icon-align-center" className="icon icon-align-center" value="icon-align-center">&#xe080;  icon-align-center</option>
        <option data-icon="icon icon-align-right" className="icon icon-align-right" value="icon-align-right">&#xe081;  icon-align-right</option>
        <option data-icon="icon icon-book2" className="icon icon-book2" value="icon-book2">&#xe082;  icon-book2</option>
        <option data-icon="icon icon-layers2" className="icon icon-layers2" value="icon-layers2">&#xe083;  icon-layers2</option>
        <option data-icon="icon icon-stack2" className="icon icon-stack2" value="icon-stack2">&#xe084;  icon-stack2</option>
        <option data-icon="icon icon-stack-2" className="icon icon-stack-2" value="icon-stack-2">&#xe085;  icon-stack-2</option>
        <option data-icon="icon icon-paper" className="icon icon-paper" value="icon-paper">&#xe086;  icon-paper</option>
        <option data-icon="icon icon-paper-stack" className="icon icon-paper-stack" value="icon-paper-stack">&#xe087;  icon-paper-stack</option>
        <option data-icon="icon icon-search3" className="icon icon-search3" value="icon-search3">&#xe088;  icon-search3</option>
        <option data-icon="icon icon-zoom-in2" className="icon icon-zoom-in2" value="icon-zoom-in2">&#xe089;  icon-zoom-in2</option>
        <option data-icon="icon icon-zoom-out2" className="icon icon-zoom-out2" value="icon-zoom-out2">&#xe08a;  icon-zoom-out2</option>
        <option data-icon="icon icon-reply2" className="icon icon-reply2" value="icon-reply2">&#xe08b;  icon-reply2</option>
        <option data-icon="icon icon-circle-plus" className="icon icon-circle-plus" value="icon-circle-plus">&#xe08c;  icon-circle-plus</option>
        <option data-icon="icon icon-circle-minus" className="icon icon-circle-minus" value="icon-circle-minus">&#xe08d;  icon-circle-minus</option>
        <option data-icon="icon icon-circle-check" className="icon icon-circle-check" value="icon-circle-check">&#xe08e;  icon-circle-check</option>
        <option data-icon="icon icon-circle-cross" className="icon icon-circle-cross" value="icon-circle-cross">&#xe08f;  icon-circle-cross</option>
        <option data-icon="icon icon-square-plus" className="icon icon-square-plus" value="icon-square-plus">&#xe090;  icon-square-plus</option>
        <option data-icon="icon icon-square-minus" className="icon icon-square-minus" value="icon-square-minus">&#xe091;  icon-square-minus</option>
        <option data-icon="icon icon-square-check" className="icon icon-square-check" value="icon-square-check">&#xe092;  icon-square-check</option>
        <option data-icon="icon icon-square-cross" className="icon icon-square-cross" value="icon-square-cross">&#xe093;  icon-square-cross</option>
        <option data-icon="icon icon-microphone" className="icon icon-microphone" value="icon-microphone">&#xe094;  icon-microphone</option>
        <option data-icon="icon icon-record" className="icon icon-record" value="icon-record">&#xe095;  icon-record</option>
        <option data-icon="icon icon-skip-back" className="icon icon-skip-back" value="icon-skip-back">&#xe096;  icon-skip-back</option>
        <option data-icon="icon icon-rewind" className="icon icon-rewind" value="icon-rewind">&#xe097;  icon-rewind</option>
        <option data-icon="icon icon-play4" className="icon icon-play4" value="icon-play4">&#xe098;  icon-play4</option>
        <option data-icon="icon icon-pause3" className="icon icon-pause3" value="icon-pause3">&#xe099;  icon-pause3</option>
        <option data-icon="icon icon-stop3" className="icon icon-stop3" value="icon-stop3">&#xe09a;  icon-stop3</option>
        <option data-icon="icon icon-fast-forward" className="icon icon-fast-forward" value="icon-fast-forward">&#xe09b;  icon-fast-forward</option>
        <option data-icon="icon icon-skip-forward" className="icon icon-skip-forward" value="icon-skip-forward">&#xe09c;  icon-skip-forward</option>
        <option data-icon="icon icon-shuffle2" className="icon icon-shuffle2" value="icon-shuffle2">&#xe09d;  icon-shuffle2</option>
        <option data-icon="icon icon-repeat" className="icon icon-repeat" value="icon-repeat">&#xe09e;  icon-repeat</option>
        <option data-icon="icon icon-folder2" className="icon icon-folder2" value="icon-folder2">&#xe09f;  icon-folder2</option>
        <option data-icon="icon icon-umbrella" className="icon icon-umbrella" value="icon-umbrella">&#xe0a0;  icon-umbrella</option>
        <option data-icon="icon icon-moon" className="icon icon-moon" value="icon-moon">&#xe0a1;  icon-moon</option>
        <option data-icon="icon icon-thermometer" className="icon icon-thermometer" value="icon-thermometer">&#xe0a2;  icon-thermometer</option>
        <option data-icon="icon icon-drop" className="icon icon-drop" value="icon-drop">&#xe0a3;  icon-drop</option>
        <option data-icon="icon icon-sun2" className="icon icon-sun2" value="icon-sun2">&#xe0a4;  icon-sun2</option>
        <option data-icon="icon icon-cloud3" className="icon icon-cloud3" value="icon-cloud3">&#xe0a5;  icon-cloud3</option>
        <option data-icon="icon icon-cloud-upload2" className="icon icon-cloud-upload2" value="icon-cloud-upload2">&#xe0a6;  icon-cloud-upload2</option>
        <option data-icon="icon icon-cloud-download2" className="icon icon-cloud-download2" value="icon-cloud-download2">&#xe0a7;  icon-cloud-download2</option>
        <option data-icon="icon icon-upload4" className="icon icon-upload4" value="icon-upload4">&#xe0a8;  icon-upload4</option>
        <option data-icon="icon icon-download4" className="icon icon-download4" value="icon-download4">&#xe0a9;  icon-download4</option>
        <option data-icon="icon icon-location3" className="icon icon-location3" value="icon-location3">&#xe0aa;  icon-location3</option>
        <option data-icon="icon icon-location-2" className="icon icon-location-2" value="icon-location-2">&#xe0ab;  icon-location-2</option>
        <option data-icon="icon icon-map3" className="icon icon-map3" value="icon-map3">&#xe0ac;  icon-map3</option>
        <option data-icon="icon icon-battery" className="icon icon-battery" value="icon-battery">&#xe0ad;  icon-battery</option>
        <option data-icon="icon icon-head" className="icon icon-head" value="icon-head">&#xe0ae;  icon-head</option>
        <option data-icon="icon icon-briefcase3" className="icon icon-briefcase3" value="icon-briefcase3">&#xe0af;  icon-briefcase3</option>
        <option data-icon="icon icon-speech-bubble" className="icon icon-speech-bubble" value="icon-speech-bubble">&#xe0b0;  icon-speech-bubble</option>
        <option data-icon="icon icon-anchor2" className="icon icon-anchor2" value="icon-anchor2">&#xe0b1;  icon-anchor2</option>
        <option data-icon="icon icon-globe2" className="icon icon-globe2" value="icon-globe2">&#xe0b2;  icon-globe2</option>
        <option data-icon="icon icon-box" className="icon icon-box" value="icon-box">&#xe0b3;  icon-box</option>
        <option data-icon="icon icon-reload" className="icon icon-reload" value="icon-reload">&#xe0b4;  icon-reload</option>
        <option data-icon="icon icon-share3" className="icon icon-share3" value="icon-share3">&#xe0b5;  icon-share3</option>
        <option data-icon="icon icon-marquee" className="icon icon-marquee" value="icon-marquee">&#xe0b6;  icon-marquee</option>
        <option data-icon="icon icon-marquee-plus" className="icon icon-marquee-plus" value="icon-marquee-plus">&#xe0b7;  icon-marquee-plus</option>
        <option data-icon="icon icon-marquee-minus" className="icon icon-marquee-minus" value="icon-marquee-minus">&#xe0b8;  icon-marquee-minus</option>
        <option data-icon="icon icon-tag" className="icon icon-tag" value="icon-tag">&#xe0b9;  icon-tag</option>
        <option data-icon="icon icon-power2" className="icon icon-power2" value="icon-power2">&#xe0ba;  icon-power2</option>
        <option data-icon="icon icon-command2" className="icon icon-command2" value="icon-command2">&#xe0bb;  icon-command2</option>
        <option data-icon="icon icon-alt" className="icon icon-alt" value="icon-alt">&#xe0bc;  icon-alt</option>
        <option data-icon="icon icon-esc" className="icon icon-esc" value="icon-esc">&#xe0bd;  icon-esc</option>
        <option data-icon="icon icon-bar-graph" className="icon icon-bar-graph" value="icon-bar-graph">&#xe0be;  icon-bar-graph</option>
        <option data-icon="icon icon-bar-graph-2" className="icon icon-bar-graph-2" value="icon-bar-graph-2">&#xe0bf;  icon-bar-graph-2</option>
        <option data-icon="icon icon-pie-graph" className="icon icon-pie-graph" value="icon-pie-graph">&#xe0c0;  icon-pie-graph</option>
        <option data-icon="icon icon-star" className="icon icon-star" value="icon-star">&#xe0c1;  icon-star</option>
        <option data-icon="icon icon-arrow-left3" className="icon icon-arrow-left3" value="icon-arrow-left3">&#xe0c2;  icon-arrow-left3</option>
        <option data-icon="icon icon-arrow-right3" className="icon icon-arrow-right3" value="icon-arrow-right3">&#xe0c3;  icon-arrow-right3</option>
        <option data-icon="icon icon-arrow-up3" className="icon icon-arrow-up3" value="icon-arrow-up3">&#xe0c4;  icon-arrow-up3</option>
        <option data-icon="icon icon-volume" className="icon icon-volume" value="icon-volume">&#xe0c6;  icon-volume</option>
        <option data-icon="icon icon-mute" className="icon icon-mute" value="icon-mute">&#xe0c7;  icon-mute</option>
        <option data-icon="icon icon-content-right" className="icon icon-content-right" value="icon-content-right">&#xe100;  icon-content-right</option>
        <option data-icon="icon icon-content-left" className="icon icon-content-left" value="icon-content-left">&#xe101;  icon-content-left</option>
        <option data-icon="icon icon-grid2" className="icon icon-grid2" value="icon-grid2">&#xe102;  icon-grid2</option>
        <option data-icon="icon icon-grid-2" className="icon icon-grid-2" value="icon-grid-2">&#xe103;  icon-grid-2</option>
        <option data-icon="icon icon-columns" className="icon icon-columns" value="icon-columns">&#xe104;  icon-columns</option>
        <option data-icon="icon icon-loader" className="icon icon-loader" value="icon-loader">&#xe105;  icon-loader</option>
        <option data-icon="icon icon-bag" className="icon icon-bag" value="icon-bag">&#xe106;  icon-bag</option>
        <option data-icon="icon icon-ban" className="icon icon-ban" value="icon-ban">&#xe107;  icon-ban</option>
        <option data-icon="icon icon-flag3" className="icon icon-flag3" value="icon-flag3">&#xe108;  icon-flag3</option>
        <option data-icon="icon icon-trash" className="icon icon-trash" value="icon-trash">&#xe109;  icon-trash</option>
        <option data-icon="icon icon-expand2" className="icon icon-expand2" value="icon-expand2">&#xe110;  icon-expand2</option>
        <option data-icon="icon icon-contract" className="icon icon-contract" value="icon-contract">&#xe111;  icon-contract</option>
        <option data-icon="icon icon-maximize" className="icon icon-maximize" value="icon-maximize">&#xe112;  icon-maximize</option>
        <option data-icon="icon icon-minimize" className="icon icon-minimize" value="icon-minimize">&#xe113;  icon-minimize</option>
        <option data-icon="icon icon-plus2" className="icon icon-plus2" value="icon-plus2">&#xe114;  icon-plus2</option>
        <option data-icon="icon icon-minus2" className="icon icon-minus2" value="icon-minus2">&#xe115;  icon-minus2</option>
        <option data-icon="icon icon-check" className="icon icon-check" value="icon-check">&#xe116;  icon-check</option>
        <option data-icon="icon icon-cross2" className="icon icon-cross2" value="icon-cross2">&#xe117;  icon-cross2</option>
        <option data-icon="icon icon-move" className="icon icon-move" value="icon-move">&#xe118;  icon-move</option>
        <option data-icon="icon icon-delete" className="icon icon-delete" value="icon-delete">&#xe119;  icon-delete</option>
        <option data-icon="icon icon-menu5" className="icon icon-menu5" value="icon-menu5">&#xe120;  icon-menu5</option>
        <option data-icon="icon icon-archive" className="icon icon-archive" value="icon-archive">&#xe121;  icon-archive</option>
        <option data-icon="icon icon-inbox" className="icon icon-inbox" value="icon-inbox">&#xe122;  icon-inbox</option>
        <option data-icon="icon icon-outbox" className="icon icon-outbox" value="icon-outbox">&#xe123;  icon-outbox</option>
        <option data-icon="icon icon-file" className="icon icon-file" value="icon-file">&#xe124;  icon-file</option>
        <option data-icon="icon icon-file-add" className="icon icon-file-add" value="icon-file-add">&#xe125;  icon-file-add</option>
        <option data-icon="icon icon-file-subtract" className="icon icon-file-subtract" value="icon-file-subtract">&#xe126;  icon-file-subtract</option>
        <option data-icon="icon icon-help" className="icon icon-help" value="icon-help">&#xe127;  icon-help</option>
        <option data-icon="icon icon-open" className="icon icon-open" value="icon-open">&#xe128;  icon-open</option>
        <option data-icon="icon icon-ellipsis" className="icon icon-ellipsis" value="icon-ellipsis">&#xe129;  icon-ellipsis</option>
        <option data-icon="icon icon-heart4" className="icon icon-heart4" value="icon-heart4">&#xe900;  icon-heart4</option>
        <option data-icon="icon icon-cloud4" className="icon icon-cloud4" value="icon-cloud4">&#xe901;  icon-cloud4</option>
        <option data-icon="icon icon-star2" className="icon icon-star2" value="icon-star2">&#xe902;  icon-star2</option>
        <option data-icon="icon icon-tv2" className="icon icon-tv2" value="icon-tv2">&#xe903;  icon-tv2</option>
        <option data-icon="icon icon-sound" className="icon icon-sound" value="icon-sound">&#xe904;  icon-sound</option>
        <option data-icon="icon icon-video3" className="icon icon-video3" value="icon-video3">&#xe905;  icon-video3</option>
        <option data-icon="icon icon-trash2" className="icon icon-trash2" value="icon-trash2">&#xe906;  icon-trash2</option>
        <option data-icon="icon icon-user2" className="icon icon-user2" value="icon-user2">&#xe907;  icon-user2</option>
        <option data-icon="icon icon-key3" className="icon icon-key3" value="icon-key3">&#xe908;  icon-key3</option>
        <option data-icon="icon icon-search4" className="icon icon-search4" value="icon-search4">&#xe909;  icon-search4</option>
        <option data-icon="icon icon-settings" className="icon icon-settings" value="icon-settings">&#xe90a;  icon-settings</option>
        <option data-icon="icon icon-camera4" className="icon icon-camera4" value="icon-camera4">&#xe90b;  icon-camera4</option>
        <option data-icon="icon icon-tag2" className="icon icon-tag2" value="icon-tag2">&#xe90c;  icon-tag2</option>
        <option data-icon="icon icon-lock4" className="icon icon-lock4" value="icon-lock4">&#xe90d;  icon-lock4</option>
        <option data-icon="icon icon-bulb" className="icon icon-bulb" value="icon-bulb">&#xe90e;  icon-bulb</option>
        <option data-icon="icon icon-pen2" className="icon icon-pen2" value="icon-pen2">&#xe90f;  icon-pen2</option>
        <option data-icon="icon icon-diamond" className="icon icon-diamond" value="icon-diamond">&#xe910;  icon-diamond</option>
        <option data-icon="icon icon-display2" className="icon icon-display2" value="icon-display2">&#xe911;  icon-display2</option>
        <option data-icon="icon icon-location4" className="icon icon-location4" value="icon-location4">&#xe912;  icon-location4</option>
        <option data-icon="icon icon-eye3" className="icon icon-eye3" value="icon-eye3">&#xe913;  icon-eye3</option>
        <option data-icon="icon icon-bubble3" className="icon icon-bubble3" value="icon-bubble3">&#xe914;  icon-bubble3</option>
        <option data-icon="icon icon-stack3" className="icon icon-stack3" value="icon-stack3">&#xe915;  icon-stack3</option>
        <option data-icon="icon icon-cup" className="icon icon-cup" value="icon-cup">&#xe916;  icon-cup</option>
        <option data-icon="icon icon-phone3" className="icon icon-phone3" value="icon-phone3">&#xe917;  icon-phone3</option>
        <option data-icon="icon icon-news" className="icon icon-news" value="icon-news">&#xe918;  icon-news</option>
        <option data-icon="icon icon-mail6" className="icon icon-mail6" value="icon-mail6">&#xe919;  icon-mail6</option>
        <option data-icon="icon icon-like" className="icon icon-like" value="icon-like">&#xe91a;  icon-like</option>
        <option data-icon="icon icon-photo" className="icon icon-photo" value="icon-photo">&#xe91b;  icon-photo</option>
        <option data-icon="icon icon-note" className="icon icon-note" value="icon-note">&#xe91c;  icon-note</option>
        <option data-icon="icon icon-clock4" className="icon icon-clock4" value="icon-clock4">&#xe91d;  icon-clock4</option>
        <option data-icon="icon icon-paperplane" className="icon icon-paperplane" value="icon-paperplane">&#xe91e;  icon-paperplane</option>
        <option data-icon="icon icon-params" className="icon icon-params" value="icon-params">&#xe91f;  icon-params</option>
        <option data-icon="icon icon-banknote" className="icon icon-banknote" value="icon-banknote">&#xe920;  icon-banknote</option>
        <option data-icon="icon icon-data" className="icon icon-data" value="icon-data">&#xe921;  icon-data</option>
        <option data-icon="icon icon-music2" className="icon icon-music2" value="icon-music2">&#xe922;  icon-music2</option>
        <option data-icon="icon icon-megaphone2" className="icon icon-megaphone2" value="icon-megaphone2">&#xe923;  icon-megaphone2</option>
        <option data-icon="icon icon-study" className="icon icon-study" value="icon-study">&#xe924;  icon-study</option>
        <option data-icon="icon icon-lab2" className="icon icon-lab2" value="icon-lab2">&#xe925;  icon-lab2</option>
        <option data-icon="icon icon-food" className="icon icon-food" value="icon-food">&#xe926;  icon-food</option>
        <option data-icon="icon icon-t-shirt" className="icon icon-t-shirt" value="icon-t-shirt">&#xe927;  icon-t-shirt</option>
        <option data-icon="icon icon-fire2" className="icon icon-fire2" value="icon-fire2">&#xe928;  icon-fire2</option>
        <option data-icon="icon icon-clip" className="icon icon-clip" value="icon-clip">&#xe929;  icon-clip</option>
        <option data-icon="icon icon-shop" className="icon icon-shop" value="icon-shop">&#xe92a;  icon-shop</option>
        <option data-icon="icon icon-calendar3" className="icon icon-calendar3" value="icon-calendar3">&#xe92b;  icon-calendar3</option>
        <option data-icon="icon icon-wallet2" className="icon icon-wallet2" value="icon-wallet2">&#xe92c;  icon-wallet2</option>
        <option data-icon="icon icon-vynil" className="icon icon-vynil" value="icon-vynil">&#xe92d;  icon-vynil</option>
        <option data-icon="icon icon-truck2" className="icon icon-truck2" value="icon-truck2">&#xe92e;  icon-truck2</option>
        <option data-icon="icon icon-world" className="icon icon-world" value="icon-world">&#xe92f;  icon-world</option>
        <option data-icon="icon icon-spinner6" className="icon icon-spinner6" value="icon-spinner6">&#xe9af;  icon-spinner6</option>
        <option data-icon="icon icon-spinner7" className="icon icon-spinner7" value="icon-spinner7">&#xe9b0;  icon-spinner7</option>
        <option data-icon="icon icon-amazon" className="icon icon-amazon" value="icon-amazon">&#xeab7;  icon-amazon</option>
        <option data-icon="icon icon-google" className="icon icon-google" value="icon-google">&#xeab8;  icon-google</option>
        <option data-icon="icon icon-google2" className="icon icon-google2" value="icon-google2">&#xeab9;  icon-google2</option>
        <option data-icon="icon icon-google3" className="icon icon-google3" value="icon-google3">&#xeaba;  icon-google3</option>
        <option data-icon="icon icon-google-plus" className="icon icon-google-plus" value="icon-google-plus">&#xeabb;  icon-google-plus</option>
        <option data-icon="icon icon-google-plus2" className="icon icon-google-plus2" value="icon-google-plus2">&#xeabc;  icon-google-plus2</option>
        <option data-icon="icon icon-google-plus3" className="icon icon-google-plus3" value="icon-google-plus3">&#xeabd;  icon-google-plus3</option>
        <option data-icon="icon icon-hangouts" className="icon icon-hangouts" value="icon-hangouts">&#xeabe;  icon-hangouts</option>
        <option data-icon="icon icon-google-drive" className="icon icon-google-drive" value="icon-google-drive">&#xeabf;  icon-google-drive</option>
        <option data-icon="icon icon-facebook2" className="icon icon-facebook2" value="icon-facebook2">&#xeac0;  icon-facebook2</option>
        <option data-icon="icon icon-facebook22" className="icon icon-facebook22" value="icon-facebook22">&#xeac1;  icon-facebook22</option>
        <option data-icon="icon icon-instagram" className="icon icon-instagram" value="icon-instagram">&#xeac2;  icon-instagram</option>
        <option data-icon="icon icon-whatsapp" className="icon icon-whatsapp" value="icon-whatsapp">&#xeac3;  icon-whatsapp</option>
        <option data-icon="icon icon-spotify" className="icon icon-spotify" value="icon-spotify">&#xeac4;  icon-spotify</option>
        <option data-icon="icon icon-telegram" className="icon icon-telegram" value="icon-telegram">&#xeac5;  icon-telegram</option>
        <option data-icon="icon icon-twitter2" className="icon icon-twitter2" value="icon-twitter2">&#xeac6;  icon-twitter2</option>
        <option data-icon="icon icon-vine" className="icon icon-vine" value="icon-vine">&#xeac7;  icon-vine</option>
        <option data-icon="icon icon-vk" className="icon icon-vk" value="icon-vk">&#xeac8;  icon-vk</option>
        <option data-icon="icon icon-renren" className="icon icon-renren" value="icon-renren">&#xeac9;  icon-renren</option>
        <option data-icon="icon icon-sina-weibo" className="icon icon-sina-weibo" value="icon-sina-weibo">&#xeaca;  icon-sina-weibo</option>
        <option data-icon="icon icon-rss2" className="icon icon-rss2" value="icon-rss2">&#xeacb;  icon-rss2</option>
        <option data-icon="icon icon-rss22" className="icon icon-rss22" value="icon-rss22">&#xeacc;  icon-rss22</option>
        <option data-icon="icon icon-youtube" className="icon icon-youtube" value="icon-youtube">&#xeacd;  icon-youtube</option>
        <option data-icon="icon icon-youtube2" className="icon icon-youtube2" value="icon-youtube2">&#xeace;  icon-youtube2</option>
        <option data-icon="icon icon-twitch" className="icon icon-twitch" value="icon-twitch">&#xeacf;  icon-twitch</option>
        <option data-icon="icon icon-vimeo" className="icon icon-vimeo" value="icon-vimeo">&#xead0;  icon-vimeo</option>
        <option data-icon="icon icon-vimeo2" className="icon icon-vimeo2" value="icon-vimeo2">&#xead1;  icon-vimeo2</option>
        <option data-icon="icon icon-lanyrd" className="icon icon-lanyrd" value="icon-lanyrd">&#xead2;  icon-lanyrd</option>
        <option data-icon="icon icon-flickr" className="icon icon-flickr" value="icon-flickr">&#xead3;  icon-flickr</option>
        <option data-icon="icon icon-flickr2" className="icon icon-flickr2" value="icon-flickr2">&#xead4;  icon-flickr2</option>
        <option data-icon="icon icon-flickr3" className="icon icon-flickr3" value="icon-flickr3">&#xead5;  icon-flickr3</option>
        <option data-icon="icon icon-flickr4" className="icon icon-flickr4" value="icon-flickr4">&#xead6;  icon-flickr4</option>
        <option data-icon="icon icon-dribbble2" className="icon icon-dribbble2" value="icon-dribbble2">&#xead7;  icon-dribbble2</option>
        <option data-icon="icon icon-behance" className="icon icon-behance" value="icon-behance">&#xead8;  icon-behance</option>
        <option data-icon="icon icon-behance2" className="icon icon-behance2" value="icon-behance2">&#xead9;  icon-behance2</option>
        <option data-icon="icon icon-deviantart" className="icon icon-deviantart" value="icon-deviantart">&#xeada;  icon-deviantart</option>
        <option data-icon="icon icon-500px" className="icon icon-500px" value="icon-500px">&#xeadb;  icon-500px</option>
        <option data-icon="icon icon-steam" className="icon icon-steam" value="icon-steam">&#xeadc;  icon-steam</option>
        <option data-icon="icon icon-steam2" className="icon icon-steam2" value="icon-steam2">&#xeadd;  icon-steam2</option>
        <option data-icon="icon icon-dropbox" className="icon icon-dropbox" value="icon-dropbox">&#xeade;  icon-dropbox</option>
        <option data-icon="icon icon-onedrive" className="icon icon-onedrive" value="icon-onedrive">&#xeadf;  icon-onedrive</option>
        <option data-icon="icon icon-github" className="icon icon-github" value="icon-github">&#xeae0;  icon-github</option>
        <option data-icon="icon icon-npm" className="icon icon-npm" value="icon-npm">&#xeae1;  icon-npm</option>
        <option data-icon="icon icon-basecamp" className="icon icon-basecamp" value="icon-basecamp">&#xeae2;  icon-basecamp</option>
        <option data-icon="icon icon-trello" className="icon icon-trello" value="icon-trello">&#xeae3;  icon-trello</option>
        <option data-icon="icon icon-wordpress" className="icon icon-wordpress" value="icon-wordpress">&#xeae4;  icon-wordpress</option>
        <option data-icon="icon icon-joomla" className="icon icon-joomla" value="icon-joomla">&#xeae5;  icon-joomla</option>
        <option data-icon="icon icon-ello" className="icon icon-ello" value="icon-ello">&#xeae6;  icon-ello</option>
        <option data-icon="icon icon-blogger" className="icon icon-blogger" value="icon-blogger">&#xeae7;  icon-blogger</option>
        <option data-icon="icon icon-blogger2" className="icon icon-blogger2" value="icon-blogger2">&#xeae8;  icon-blogger2</option>
        <option data-icon="icon icon-tumblr2" className="icon icon-tumblr2" value="icon-tumblr2">&#xeae9;  icon-tumblr2</option>
        <option data-icon="icon icon-tumblr22" className="icon icon-tumblr22" value="icon-tumblr22">&#xeaea;  icon-tumblr22</option>
        <option data-icon="icon icon-yahoo" className="icon icon-yahoo" value="icon-yahoo">&#xeaeb;  icon-yahoo</option>
        <option data-icon="icon icon-yahoo2" className="icon icon-yahoo2" value="icon-yahoo2">&#xeaec;  icon-yahoo2</option>
        <option data-icon="icon icon-tux" className="icon icon-tux" value="icon-tux">&#xeaed;  icon-tux</option>
        <option data-icon="icon icon-appleinc" className="icon icon-appleinc" value="icon-appleinc">&#xeaee;  icon-appleinc</option>
        <option data-icon="icon icon-finder" className="icon icon-finder" value="icon-finder">&#xeaef;  icon-finder</option>
        <option data-icon="icon icon-android" className="icon icon-android" value="icon-android">&#xeaf0;  icon-android</option>
        <option data-icon="icon icon-windows" className="icon icon-windows" value="icon-windows">&#xeaf1;  icon-windows</option>
        <option data-icon="icon icon-windows8" className="icon icon-windows8" value="icon-windows8">&#xeaf2;  icon-windows8</option>
        <option data-icon="icon icon-soundcloud" className="icon icon-soundcloud" value="icon-soundcloud">&#xeaf3;  icon-soundcloud</option>
        <option data-icon="icon icon-soundcloud2" className="icon icon-soundcloud2" value="icon-soundcloud2">&#xeaf4;  icon-soundcloud2</option>
        <option data-icon="icon icon-skype" className="icon icon-skype" value="icon-skype">&#xeaf5;  icon-skype</option>
        <option data-icon="icon icon-reddit" className="icon icon-reddit" value="icon-reddit">&#xeaf6;  icon-reddit</option>
        <option data-icon="icon icon-hackernews" className="icon icon-hackernews" value="icon-hackernews">&#xeaf7;  icon-hackernews</option>
        <option data-icon="icon icon-wikipedia" className="icon icon-wikipedia" value="icon-wikipedia">&#xeaf8;  icon-wikipedia</option>
        <option data-icon="icon icon-linkedin2" className="icon icon-linkedin2" value="icon-linkedin2">&#xeaf9;  icon-linkedin2</option>
        <option data-icon="icon icon-linkedin22" className="icon icon-linkedin22" value="icon-linkedin22">&#xeafa;  icon-linkedin22</option>
        <option data-icon="icon icon-lastfm" className="icon icon-lastfm" value="icon-lastfm">&#xeafb;  icon-lastfm</option>
        <option data-icon="icon icon-lastfm2" className="icon icon-lastfm2" value="icon-lastfm2">&#xeafc;  icon-lastfm2</option>
        <option data-icon="icon icon-delicious" className="icon icon-delicious" value="icon-delicious">&#xeafd;  icon-delicious</option>
        <option data-icon="icon icon-stumbleupon" className="icon icon-stumbleupon" value="icon-stumbleupon">&#xeafe;  icon-stumbleupon</option>
        <option data-icon="icon icon-stumbleupon2" className="icon icon-stumbleupon2" value="icon-stumbleupon2">&#xeaff;  icon-stumbleupon2</option>
        <option data-icon="icon icon-stackoverflow" className="icon icon-stackoverflow" value="icon-stackoverflow">&#xeb00;  icon-stackoverflow</option>
        <option data-icon="icon icon-pinterest" className="icon icon-pinterest" value="icon-pinterest">&#xeb01;  icon-pinterest</option>
        <option data-icon="icon icon-pinterest2" className="icon icon-pinterest2" value="icon-pinterest2">&#xeb02;  icon-pinterest2</option>
        <option data-icon="icon icon-xing" className="icon icon-xing" value="icon-xing">&#xeb03;  icon-xing</option>
        <option data-icon="icon icon-xing2" className="icon icon-xing2" value="icon-xing2">&#xeb04;  icon-xing2</option>
        <option data-icon="icon icon-flattr" className="icon icon-flattr" value="icon-flattr">&#xeb05;  icon-flattr</option>
        <option data-icon="icon icon-foursquare" className="icon icon-foursquare" value="icon-foursquare">&#xeb06;  icon-foursquare</option>
        <option data-icon="icon icon-yelp" className="icon icon-yelp" value="icon-yelp">&#xeb07;  icon-yelp</option>
        <option data-icon="icon icon-paypal" className="icon icon-paypal" value="icon-paypal">&#xeb08;  icon-paypal</option>
        <option data-icon="icon icon-chrome" className="icon icon-chrome" value="icon-chrome">&#xeb09;  icon-chrome</option>
        <option data-icon="icon icon-firefox" className="icon icon-firefox" value="icon-firefox">&#xeb0a;  icon-firefox</option>
        <option data-icon="icon icon-IE" className="icon icon-IE" value="icon-IE">&#xeb0b;  icon-IE</option>
        <option data-icon="icon icon-edge" className="icon icon-edge" value="icon-edge">&#xeb0c;  icon-edge</option>
        <option data-icon="icon icon-safari" className="icon icon-safari" value="icon-safari">&#xeb0d;  icon-safari</option>
        <option data-icon="icon icon-opera" className="icon icon-opera" value="icon-opera">&#xeb0e;  icon-opera</option>
        <option data-icon="icon icon-file-pdf" className="icon icon-file-pdf" value="icon-file-pdf">&#xeb0f;  icon-file-pdf</option>
        <option data-icon="icon icon-file-openoffice" className="icon icon-file-openoffice" value="icon-file-openoffice">&#xeb10;  icon-file-openoffice</option>
        <option data-icon="icon icon-file-word" className="icon icon-file-word" value="icon-file-word">&#xeb11;  icon-file-word</option>
        <option data-icon="icon icon-file-excel" className="icon icon-file-excel" value="icon-file-excel">&#xeb12;  icon-file-excel</option>
        <option data-icon="icon icon-libreoffice" className="icon icon-libreoffice" value="icon-libreoffice">&#xeb13;  icon-libreoffice</option>
        <option data-icon="icon icon-html-five" className="icon icon-html-five" value="icon-html-five">&#xeb14;  icon-html-five</option>
        <option data-icon="icon icon-html-five2" className="icon icon-html-five2" value="icon-html-five2">&#xeb15;  icon-html-five2</option>
        <option data-icon="icon icon-css3" className="icon icon-css3" value="icon-css3">&#xeb16;  icon-css3</option>
        <option data-icon="icon icon-git" className="icon icon-git" value="icon-git">&#xeb17;  icon-git</option>
        <option data-icon="icon icon-codepen" className="icon icon-codepen" value="icon-codepen">&#xeb18;  icon-codepen</option>
        <option data-icon="icon icon-svg" className="icon icon-svg" value="icon-svg">&#xeb19;  icon-svg</option>
        <option data-icon="icon icon-IcoMoon" className="icon icon-IcoMoon" value="icon-IcoMoon">&#xeb1a;  icon-IcoMoon</option>
      </>
    )
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
                    <i className={this.state.allData['heroarea'][i].icon||'icon-arrow-down'}></i>
                  </div>
                </div>
                <div className="col-md-11">
                  <select className="form-control" name={"heroarea|"+i+"|icon"} value={this.state.allData['heroarea'][i].icon||''}  onChange={this.changeHandler} style={{fontFamily: "icomoon"}}>
                    {this.getIconOptionLst()}
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
                    <i className={this.state.allData['intro']['introExpertieList'][i].icon||'icon-arrow-down3'}></i>
                  </div>
                </div>
                <div className="col-md-10">
                  <select className="form-control" name={"intro|introExpertieList|"+i+"|icon"} value={this.state.allData['intro']['introExpertieList'][i].icon||''} onChange={this.changeHandler} style={{fontFamily: "icomoon"}}>
                    {this.getIconOptionLst()}
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