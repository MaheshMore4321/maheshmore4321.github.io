import React, { Component } from 'react';

import ArrayJSON from '../common/ArrayJSON';

class ProjectJSON extends Component {
  render() {
    let index = 1;
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "prj_nm": "{this.props.data && this.props.data.prj_nm && this.props.data.prj_nm}",
            "prj_org": "{this.props.data && this.props.data.prj_org && this.props.data.prj_org}",
            "prj_clnt": "{this.props.data && this.props.data.prj_clnt && this.props.data.prj_clnt}",
            "prj_dur": "{this.props.data && this.props.data.prj_dur && this.props.data.prj_dur}",
            "prj_tec": "{this.props.data && this.props.data.prj_tec && this.props.data.prj_tec}",
            "prj_typ": "{this.props.data && this.props.data.prj_typ && this.props.data.prj_typ}",
            "prj_env": "{this.props.data && this.props.data.prj_env && this.props.data.prj_env}",
            "prj_role": "{this.props.data && this.props.data.prj_role && this.props.data.prj_role}",
            "prj_tmsz": "{this.props.data && this.props.data.prj_tmsz && this.props.data.prj_tmsz}",
            "prj_desc": "{this.props.data && this.props.data.prj_desc && this.props.data.prj_desc}",
            "prj_rl_desc": [
              {
                this.props.data && this.props.data.prj_rl_desc && this.props.data.prj_rl_desc.map(project_innerx =>
                  <ArrayJSON
                    key={index++}
                    id={index}
                    data={project_innerx}
                  />
                )
              }
            ]
          {"}"}
        </>
    )
  }
}
export default ProjectJSON;
