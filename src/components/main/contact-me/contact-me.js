import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios';
import MyModal from '../../utility/mymodal';
 
class ContactMe extends Component {
	constructor(props){
		super(props)

		this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      feedback: "my-portfolio",
      loading: false, 
      contactme_: [],
      sendMailOperationStatus: 0,
      addModalShow : false
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
    this.setState({[e.target.name]: e.target.value});
    this.setState({addModalShow:true});
  }  
  
  submtHandler = e => {
    e.preventDefault();
    this.setState({loading:true});
    axios.post(api.contactme_feedback_api, this.state)
      .then(response =>{ 
        this.setState({loading:false});
        console.log(response);
    })
      .catch(error =>{
        this.setState({loading:false});
        console.log(error);
    })
  }

  render() {
    const {contactme_, name, email, subject, message, loading} = this.state;
    let addModalClose =()=> this.setState({addModalShow:false});
    
    return (
      <div>
        <div className="row">
					<div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
						<div className="hire">
							<h2>Something coming soon !!!</h2>
							{/* <a href="#" className="btn-hire">Lets Have a Fun</a> */}
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
                    <MyModal 
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                    />
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