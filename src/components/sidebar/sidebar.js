import React, { Component } from 'react';
import * as CONST from '../constant/constant';

class Sidebar extends Component {
  render() {
    return (
    	<div>
      		<aside id="sym-aside" className="border js-fullheight" style={{backgroundImage:`url(${CONST.SIDEBAR_BACKGROUND_IMAGE_PATH})`, backgroundSize: 'cover'}}>
				<div className="text-center">
					<div className="author-img" style={{backgroundImage:'url('+CONST.SIDEBAR_PROFILE_PICTURE_PATH+')'}}></div>
					<h1 id="sym-logo" style={{fontsize:'30px',margin:'0'}}><a href="index.html" style={{fontsize: '40px'}}>Mahesh More</a></h1>
					<span className="position" style={{marginbottom: '0',fontweight:'600',fontsize:'15px'}}>Technology-Consultant @Virtusa</span>
					<div className="sym-footer" style={{margintop:'0.6em',marginbottom:'0.6em'}}>
						<ul>
							<li><a href={CONST.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
							<li><a href={CONST.TWITTER_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-twitter2"></i></a></li>
							<li><a href={CONST.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
							<li><a href={CONST.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
							<li><a href={CONST.GITHUB_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
							<li><a href={CONST.WEBSITE_LINK} target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
						</ul>
					</div>
				</div>
				<nav id="sym-main-menu" role="navigation" className="navbar">
					<div id="navbar" className="collapse">
						<ul>
							<li style={{margin:'0',padding:'0'}}><a href="#aboutme" data-nav-section="aboutme" style={{fontsize: '20px'}}>About_Me</a></li>
							<li style={{margin:'0',padding:'0'}}><a href="#education" data-nav-section="education" style={{fontsize: '20px'}}>Education</a></li>
							<li style={{margin:'0',padding:'0'}}><a href="#experience" data-nav-section="experience" style={{fontsize: '20px'}}>Experience</a></li>
							<li style={{margin:'0',padding:'0'}}><a href="#skill" data-nav-section="skill" style={{fontsize: '20px'}}>Skill</a></li>
							<li style={{margin:'0',padding:'0'}}><a href="#project" data-nav-section="project" style={{fontsize: '20px'}}>Project</a></li>
							<li style={{margin:'0',padding:'0'}}><a href="#contactme" data-nav-section="contactme" style={{fontsize:'20px'}}>Contact_Me</a></li>
						</ul>
					</div>
				</nav>
				<div className="sym-footer" style={{margintop:'0.6em',marginbottom:'0.6em'}}>
					<div><small style={{fontsize:'20px'}}>Made with <i className="icon-heart" aria-hidden="true"></i> and <i className="icon-beer" aria-hidden="true"></i></small></div>
					<div><small style={{fontsize:'14px'}}>Copyright ©2020 All rights reserved</small></div>
				</div>
			</aside>
    	</div>
    );
  }
}
export default Sidebar;