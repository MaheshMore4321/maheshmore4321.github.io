import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
    	return (
    		<>
      			<aside id="sym-aside" className="border js-fullheight" style={{backgroundImage:`url(${this.props.data && this.props.data.background_picture_link})`, backgroundSize: 'cover', maxHeight:'535px', height:'auto'}}>
					<div className="text-center">
						<div className="author-img" style={{backgroundImage:`url(${this.props.data && this.props.data.profile_picture_link})`}}></div>
						<h1 id="sym-logo"><a href="index.html">{this.props.data && this.props.data.name}</a></h1>
						<span className="position">{this.props.data && this.props.data.job_title}</span>
						<div className="sym-footer margin-top-bottom">
							<ul>
								<li><a href={this.props.data && this.props.data.facebook_link} target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
								<li><a href={this.props.data && this.props.data.twitter_link} target="_blank" rel="noopener noreferrer"><i className="icon-twitter2"></i></a></li>
								<li><a href={this.props.data && this.props.data.instgram_link} target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
								<li><a href={this.props.data && this.props.data.linkedin_link} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
								<li><a href={this.props.data && this.props.data.github_link} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
								<li><a href={this.props.data && this.props.data.website_link} target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
							</ul>
						</div>
					</div>
					<nav id="sym-main-menu" role="navigation" className="navbar">
						<div id="navbar" className="collapse">
							<ul>
								<li><a href="#aboutme" data-nav-section="aboutme" className="fontSize15">About_Me</a></li>
								<li><a href="#education" data-nav-section="education" className="fontSize15">Education</a></li>
								<li><a href="#skill" data-nav-section="skill" className="fontSize15">Skill</a></li>
								<li><a href="#experience" data-nav-section="experience" className="fontSize15">Experience</a></li>
								<li><a href="#project" data-nav-section="project" className="fontSize15">Project</a></li>
								<li><a href="#contactme" data-nav-section="contactme" className="fontSize15">Contact Me</a></li>
							</ul>
							<div className="sym-footer margin-top-bottom">
								<small className="fontSize15">Made with <i className="icon-heart" aria-hidden="true"></i> and <i className="icon-beer" aria-hidden="true"></i></small>
								<br/>
								<small>Copyright ©2020 All rights reserved</small>
							</div>
							<div className="sym-footer margin-top-bottom">
								<small>Thanks <a href="https://colorlib.com/wp/template/jackson/" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration</small>
							</div>
						</div>
					</nav>
				</aside>
			</>
    	);
  	}
}
export default Sidebar;