import React, { Component } from 'react';

import ArrayJSON from '../common/ArrayJSON';

class SkillJSON extends Component {
  render() {
    let index = 1;
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "skillHeader": "{this.props.data && this.props.data.skillHeader && this.props.data.skillHeader}",
            "skillList": [
              {
                this.props.data && this.props.data.skillList && this.props.data.skillList.map(skillList_innerx =>
                  <ArrayJSON
                    key={index++}
                    id={index}
                    data={skillList_innerx}
                  />
                )
              }
            ]
          {"}"}
        </>
    )
  }
}
export default SkillJSON;
