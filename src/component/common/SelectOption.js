import React, { Component } from 'react';

class SelectOption extends Component {
  render() {
    return (
        <>
          <option data-icon={"icon " + this.props.icon} className={"icon " + this.props.icon} value={this.props.icon}>{'&#x' + this.props.unicode + ';'}  {this.props.text}</option>
        </>
    )
  }
}
export default SelectOption;
