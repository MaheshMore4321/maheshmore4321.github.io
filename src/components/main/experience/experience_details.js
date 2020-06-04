import React, { Component } from 'react';
import parse from 'html-react-parser';

class ExperienceDetails extends Component {
  render() {
    return (
      <>
        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="timeline-entry-inner">
                <div className={this.props.data.icon}>
                    <i className="icon-pen2"></i>
                </div>
                <div className="timeline-label" style={{padding:'0px'}}>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne" style={{border:'none'}}>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.data.id} aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                                    <p style={{margin:'0'}}>{parse(this.props.data.job_compy_desig)}</p>
                                    <p style={{margin:'0'}}>{parse(this.props.data.job_duration)}</p>    
                                </a>
                            </h4>
                        </div>
                        <div id={this.props.data.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height:'0px'}}>
                            <div className="panel-body">
                                <div className="row">
                                    {
                                        this.props.data.job_desc.map(job_desc__inner =>
                                            <p key={job_desc__inner} style={{lineheight:'1.4',margin:'0'}}><i className="fa fa-circle" aria-hidden="true" style={{verticalalign:'middle',fontsize:'8px'}}>&nbsp;&nbsp;</i>{parse(job_desc__inner)}</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </article>
      </>
    )
  }
}
export default ExperienceDetails;
