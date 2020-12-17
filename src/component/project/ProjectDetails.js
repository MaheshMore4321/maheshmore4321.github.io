import React, { Component } from 'react';
import parse from 'html-react-parser';

class ProjectDetails extends Component {
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
                                    <a data-toggle="collapse" data-parent="#accordion" href={"#prj"+this.props.id} aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                                        <p style={{margin:'0'}}><b>{this.props.data && this.props.data.prj_nm && parse(this.props.data.prj_nm)}</b></p>
                                        <p style={{margin:'0'}}><b>Organization</b> : {this.props.data && this.props.data.prj_org && parse(this.props.data.prj_org)}</p>
                                        <p style={{margin:'0'}}><b>Client</b> : {this.props.data && this.props.data.prj_clnt && parse(this.props.data.prj_clnt)}</p>
                                        <p style={{margin:'0'}}><b>Duration</b> : {this.props.data && this.props.data.prj_dur && parse(this.props.data.prj_dur)}</p>
                                    </a>
                                </h4>
                            </div>
                            <div id={"prj"+this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" style={{height:'0px'}}>
                                <div className="panel-body">
                                    <div className="row">
                                        <p style={{lineheight:'1.4',margin:'0'}}><b>Technology</b> : {this.props.data && this.props.data.prj_tec && parse(this.props.data.prj_tec)}</p>
                                        <p style={{lineheight:'1.4',margin:'0'}}><b>Project Type</b> : {this.props.data && this.props.data.prj_typ && parse(this.props.data.prj_typ)}</p>
                                        <p style={{lineheight:'1.4',margin:'0'}}><b>Environment</b> : {this.props.data && this.props.data.prj_env && parse(this.props.data.prj_env)}</p>
                                        <p style={{lineheight:'1.4',margin:'0'}}><b>Role</b> : {this.props.data && this.props.data.prj_role && parse(this.props.data.prj_role)}</p>
                                        <p style={{lineheight:'1.4',margin:'0'}}><b>Team Size</b> : {this.props.data && this.props.data.prj_tmsz && parse(this.props.data.prj_tmsz)}</p>
                                        <br/>
                                        <p style={{margin:'0'}}><b>Project Description</b> : </p>
                                        <p style={{lineheight:'1.4',margin:'0'}}>{this.props.data && this.props.data.prj_desc && parse(this.props.data.prj_desc)}</p>
                                        <br/>
                                        <p style={{margin:'0'}}><b>Roles and Responsibilities</b> : </p>
                                            {
                                                this.props.data && this.props.data.prj_rl_desc && this.props.data.prj_rl_desc.map(prj_rl_desc__inner =>
                                                    <p key={prj_rl_desc__inner} style={{lineheight:'1.4',margin:'0'}}><i className="fa fa-circle" aria-hidden="true" style={{verticalalign:'middle',fontsize:'8px'}}>&nbsp;&nbsp;</i>{parse(prj_rl_desc__inner)}</p>
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
export default ProjectDetails;
