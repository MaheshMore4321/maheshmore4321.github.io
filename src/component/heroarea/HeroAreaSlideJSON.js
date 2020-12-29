import React, { Component } from 'react';

class HeroAreaSlideJSON extends Component {
  render() {
    let index = 1;
    return (
        <>
          {this.props.id != 1 ? ",":""}
          {"{"}
            "backgroundImg": "{this.props.data && this.props.data.backgroundImg && this.props.data.backgroundImg}",
            "headerLine": "{this.props.data && this.props.data.headerLine && this.props.data.headerLine}",
            "link": "{this.props.data && this.props.data.link && this.props.data.link}",
            "text": "{this.props.data && this.props.data.text && this.props.data.text}",
            "icon": "{this.props.data && this.props.data.icon && this.props.data.icon}"
          {"}"}
        </>
    )
  }
}
export default HeroAreaSlideJSON;
