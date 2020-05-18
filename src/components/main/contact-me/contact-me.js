import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios';

class ContactMe extends Component {
	constructor(props){
		super(props)

		this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      feedback: "my-portfolio",

      contactme_: []
		}
	}
  
	componentDidMount(){
		axios.get(api.contactme_api)
		.then(response =>{ 
			this.setState({contactme_: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	} 

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submtHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post(api.contactme_feedback_api, this.state)
		.then(response =>{ 
			console.log(response);
		})
		.catch(error =>{
			console.log(error);
		})
  }

  render() {
    const {contactme_, name, email, subject, message} = this.state;

    return (
      <div>
        <div className="row">
					<div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
						<div className="hire">
							<h2>Something coming soon !!!</h2>
							{/* <a href="#" className="btn-hire">Hire me</a> */}
						</div>
					</div>
				</div>
        <section id="sec_contactme" className="sym-contact" data-section="contactme">
          <div  className="sym-narrow-content">
            <div  className="row">
              <div  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span  className="heading-meta">Get in Touch</span>
                <h2  className="sym-heading">Contact</h2>
              </div>
            </div>
            <div  className="row">
              <div  className="col-md-5">
                <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div  className="sym-icon"><i  className="icon-globe-outline"></i></div>
                  <div  className="sym-text">
                    <p><a href={"mailto:"+contactme_.emailId}>{contactme_.emailId}</a></p>
                  </div>
                </div>
                <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div  className="sym-icon"><i  className="icon-map"></i></div>
                  <div  className="sym-text"><p>{contactme_.address}</p></div>
                </div>
                <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div  className="sym-icon"><i  className="icon-phone"></i></div>
                  <div  className="sym-text"><p><a href="tel://">{contactme_.mobileNumber}</a></p></div>
                </div>
              </div>
              <div  className="col-md-7 col-md-push-1">
                <div  className="row">
                  <div  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form onSubmit={this.submtHandler}>
                      <div  className="form-group">
                        <input type="text"  name="name" value={name} onChange={this.changeHandler} className="form-control" placeholder="Name"/>
                      </div>
                      <div  className="form-group">
                        <input type="text"  name="email" value={email} onChange={this.changeHandler} className="form-control" placeholder="Email"/>
                      </div>
                      <div  className="form-group">
                        <input type="text"  name="subject" value={subject} onChange={this.changeHandler}className="form-control" placeholder="Subject"/>
                      </div>
                      <div  className="form-group">
                        <textarea name="message" value={message} onChange={this.changeHandler}id="message" cols="30" rows="7"  className="form-control" placeholder="Message"></textarea>
                      </div>
                      <div  className="form-group">
                        <input type="submit"  className="btn btn-primary btn-send-message" value="Send Message"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default ContactMe;
