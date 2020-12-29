import React, { Component } from 'react';

class ArrayJSON extends Component {
  render() {
    return (
        <>
          {this.props.id != 1 ? ",":""}
          "{this.props.data && this.props.data}"
        </>
    )
  }
}
export default ArrayJSON;
