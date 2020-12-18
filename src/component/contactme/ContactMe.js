import React, { Component } from 'react';
import axios from 'axios';

class ContactMe extends Component {
	constructor(props){
		super(props)

		this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: false,
    }
  }
  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  submtHandler = e => {
    e.preventDefault();
    this.setState({loading:true});

    var headersData = {headers: {Accept: "application/json"}};
    var feedbackData = {
      name:this.state.name,
      email:this.state.email,
      message:`Subject :: ${this.state.subject} | Message :: ${this.state.message}`
    };

    axios.post(this.props.data.feedback_link, {feedbackData}, {headersData})
      .then(response =>{
        this.setState({loading:false});
        alert("Message Succesfully sent, i will get back you soon");
      })
      .catch(error =>{
        this.setState({loading:false});
        alert("It's Seems That the Server Error, But you still contact me over mail, i will get back you soon");
      });
  };

  render() {
    const {name, email, subject, message, loading} = this.state;
    return (
      <>
        <div className="row">
					<div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
						<div className="hire">
							<h2>Something coming soon !!!</h2>
							{/* <a href="#" className="btn-hire">Lets Have a Fun</a> */}
						</div>
					</div>
				</div>
        <section id="contactme" className="sym-contact" data-section="contactme">
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
                    <p><a href={this.props.data && "mailto:" + this.props.data.emailId}>{this.props.data && this.props.data.emailId}</a></p>
                  </div>
                </div>
                <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div  className="sym-icon"><i  className="icon-map"></i></div>
                  <div  className="sym-text"><p>{this.props.data && this.props.data.address}</p></div>
                </div>
                <div  className="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div  className="sym-icon"><i  className="icon-phone"></i></div>
                  <div  className="sym-text"><p><a href={this.props.data && "tel://" + this.props.data.mobileNumber}>{this.props.data && this.props.data.mobileNumber}</a></p></div>
                </div>
              </div>
              <div  className="col-md-7 col-md-push-1">
                <div  className="row">
                  <div  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form onSubmit={this.submtHandler}>
                      <div  className="form-group">
                        <input type="text"  name="name" value={name} onChange={this.changeHandler} className="form-control" placeholder="Name" required/>
                      </div>
                      <div  className="form-group">
                        <input type="text"  name="email" value={email} onChange={this.changeHandler} className="form-control" placeholder="Email" required pattern="^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$"/>
                      </div>
                      <div  className="form-group">
                        <input type="text"  name="subject" value={subject} onChange={this.changeHandler}className="form-control" placeholder="Subject" required/>
                      </div>
                      <div  className="form-group">
                        <textarea name="message" value={message} onChange={this.changeHandler}id="message" cols="30" rows="7" className="form-control" placeholder="Message" required></textarea>
                      </div>
                      <div  className="form-group">
                        <button type="submit"  className="btn btn-primary btn-send-message">
                          {loading && (<i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/>)}
                          {loading && <span>Sending Message</span>}
                          {!loading && <span>Send Message</span>}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default ContactMe;