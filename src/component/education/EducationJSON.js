import React, { Component } from 'react';

class EducationJSON extends Component {
  render() {
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "institute": "{this.props.data && this.props.data.institute && this.props.data.institute}",
            "std_branch": "{this.props.data && this.props.data.std_branch && this.props.data.std_branch}",
            "university": "{this.props.data && this.props.data.university && this.props.data.university}",
            "year": "{this.props.data && this.props.data.year && this.props.data.year}",
            "desc": "{this.props.data && this.props.data.desc ? this.props.data.institute : null}"
          {"}"}
        </>
    )
  }
}
export default EducationJSON;
