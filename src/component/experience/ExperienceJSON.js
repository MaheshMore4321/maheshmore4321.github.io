import React, { Component } from 'react';

import ArrayJSON from '../common/ArrayJSON';

class ExperienceJSON extends Component {
  render() {
      let index = 1;
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "job_compy_desig": "{this.props.data && this.props.data.job_compy_desig && this.props.data.job_compy_desig}",
            "job_duration": "{this.props.data && this.props.data.job_duration && this.props.data.job_duration}",
            "job_desc": [
              {
                this.props.data && this.props.data.job_desc && this.props.data.job_desc.map(job_desc_innerx =>
                  <ArrayJSON
                    key={index++}
                    id={index}
                    data={job_desc_innerx}
                  />
                )
              }
            ]
          {"}"}
        </>
    )
  }
}
export default ExperienceJSON;
