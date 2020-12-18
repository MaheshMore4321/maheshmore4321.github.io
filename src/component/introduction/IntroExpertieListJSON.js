import React, { Component } from 'react';

class IntroExpertieListJSON extends Component {
  render() {
    let index = 1;
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "icon": "{this.props.data && this.props.data.icon && this.props.data.icon}",
            "desc": "{this.props.data && this.props.data.desc && this.props.data.desc}"
          {"}"}
        </>
    )
  }
}
export default IntroExpertieListJSON;
