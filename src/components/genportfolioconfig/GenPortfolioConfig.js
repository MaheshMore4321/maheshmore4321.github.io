import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

class GenPortfolioConfig extends Component {
  render() {
    return (
      <div id="row" style={{padding:'20px'}}>
        <h1>HELLO GeneratePOrtfolioJson Page</h1>
        <h1>This UnderConstruction, Work is in progress</h1>

        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" 
                    href="#SidebarData" aria-expanded="false" aria-controls="collapseTwo">Sidebar Data
                    </a>
                </h4>
            </div>
            <div id="SidebarData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                    <div className="row">
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Your Name"/>
                          <Form.Control type="text" placeholder="Job Title" />
                          <Form.Control type="text" placeholder="Profile Picture Link" />
                          <Form.Control type="text" placeholder="Background Picture Link" />
                          <Form.Control type="text" placeholder="Facebook Social Link" />
                          <Form.Control type="text" placeholder="Twitter Social Link" />
                          <Form.Control type="text" placeholder="Instagram Social Link" />
                          <Form.Control type="text" placeholder="LinkedIn Social Link" />
                          <Form.Control type="text" placeholder="Github Social Link" />
                          <Form.Control type="text" placeholder="Website Link" />
                        </Form.Group>
                      </Form>
                    </div>
                </div>
            </div>
        </div>

        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" 
                    href="#ContactMeData" aria-expanded="false" aria-controls="collapseTwo">ContactMe Data
                    </a>
                </h4>
            </div>
            <div id="ContactMeData" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                    <div className="row">
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Mobile No"/>
                          <Form.Control type="text" placeholder="Address" />
                          <Form.Control type="text" placeholder="EmailId" />
                          <Form.Control type="text" placeholder="Feedback Link" />
                        </Form.Group>
                      </Form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default GenPortfolioConfig;