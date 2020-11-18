import React, { Component } from 'react';

class GeneratePortfolioJson extends Component {
  render() {
    return (
      <div id="sym-page">
        <h1>HELLO GeneratePOrtfolioJson Page</h1>
        <h1>This UnderConstruction, Work is in progress</h1>
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
    );
  }
}
export default GeneratePortfolioJson;