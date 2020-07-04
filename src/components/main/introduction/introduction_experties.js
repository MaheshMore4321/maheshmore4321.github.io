import React, { Component } from 'react';

class IntroductionExpertise extends Component {
  render() {
    return (
      <div className="col-md-4 text-center animate-box">
        <div className={this.props.id && this.props.id !== undefined && "services color-"+this.props.id}>
          <span className="icon">
            <i className={this.props.data && this.props.data.icon !== undefined && this.props.data.icon}></i>
          </span>
          <div className="desc">
            <h3>{this.props.data && this.props.data.desc !== undefined && this.props.data.desc}</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default IntroductionExpertise;

