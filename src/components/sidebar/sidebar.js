import React, { Component } from 'react';
import * as api from '../constant/constant';
import axios from 'axios';

class Sidebar extends Component {
	constructor(props){
		super(props)

		this.state = {
			sidebar_: []
		}
	}

	componentDidMount(){
		axios.get(api.sidebar_api)
		.then(response =>{ 
			this.setState({sidebar_: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	} 

	render() {
		const {sidebar_} = this.state;
    	return (
    		<div>
      			<aside id="sym-aside" className="border js-fullheight" style={{backgroundImage:`url(${sidebar_.background_picture_link})`, backgroundSize: 'cover'}}>
					<div className="text-center">
						<div className="author-img" style={{backgroundImage:`url(${sidebar_.profile_picture_link})`}}></div>
						<h1 id="sym-logo"><a href="index.html">{sidebar_.name}</a></h1>
						<span className="position">{sidebar_.job_title}</span>
						<div className="sym-footer margin-top-bottom">
							<ul>
								<li><a href={sidebar_.facebook_link} target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
								<li><a href={sidebar_.twitter_link} target="_blank" rel="noopener noreferrer"><i className="icon-twitter2"></i></a></li>
								<li><a href={sidebar_.instgram_link} target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
								<li><a href={sidebar_.linkedin_link} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
								<li><a href={sidebar_.github_link} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
								<li><a href={sidebar_.website_link} target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
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
								<li><a href="#contactme" data-nav-section="contactme" className="fontSize15">Contact_Me</a></li>
							</ul>
						</div>
					</nav>
					<div className="sym-footer margin-top-bottom">
						<small className="fontSize15">Made with <i className="icon-heart" aria-hidden="true"></i> and <i className="icon-beer" aria-hidden="true"></i></small>
						<br/>
						<small>Copyright ©2020 All rights reserved</small>
					</div>
					<div className="sym-footer margin-top-bottom">
						<small>Thanks <a href="https://colorlib.com/wp/template/jackson/" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration</small>
					</div>	
				</aside>
			</div>
    	);
  	}
}
export default Sidebar;