import React, { Component } from 'react';
import parse from 'html-react-parser';

class EducationDetails extends Component {
  render() {
    return (
      <>
        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
          <div className="timeline-entry-inner">
            <div className={"timeline-icon color-"+this.props.id}>
              <i className="icon-pen2"></i>
            </div>
            <div className="timeline-label" style={{padding:'0px'}}>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne" style={{border:'none'}}>
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href={"#edu"+this.props.id} aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                      <p style={{margin:'0'}}><b>{this.props.data && this.props.std_branch !== undefined ? dataparse(this.props.data.std_branch):'d'}</b></p>
                      <p style={{margin:'0'}}><b>{this.props.data && this.props.institute !== undefined ? parse(this.props.data.institute):'c'}</b></p>
                      <p style={{margin:'0'}}><b>{this.props.data && this.props.university !== undefined ? parse(this.props.data.university):'b'}</b></p>
                      <p style={{margin:'0'}}><b>{this.props.data && this.props.year !== undefined ? parse(this.props.data.year):'a'}</b></p>
                    </a>
                  </h4>
                </div>
                <div id={"edu"+this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" style={{height:'0px'}}>
                  {
                    this.props.data.desc &&
                    <div className="panel-body">
                      <div className="row">
                        <p style={{lineheight:'1.4', margin:'0'}}>{parse(this.props.data.desc)}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
}
export default EducationDetails;