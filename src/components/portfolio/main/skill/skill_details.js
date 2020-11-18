import React, { Component } from 'react';
import parse from 'html-react-parser';

class SkillDetails extends Component {
  render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={"#skill"+this.props.id} aria-expanded="false" aria-controls="collapseTwo">{this.props.data.skillHeader}
                    </a>
                </h4>
            </div>
            <div id={"skill"+this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                    <div className="row">
                        {
                            this.props.data.skillList.map(skillsubList =>
                                <div key={skillsubList}  className="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                                    <p style={{lineheight:'1.4',margin:'0'}}><i className="fa fa-circle" aria-hidden="true" style={{verticalalign:'middle',fontsize:'8px'}}>&nbsp;&nbsp;</i>{parse(skillsubList)}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default SkillDetails;
