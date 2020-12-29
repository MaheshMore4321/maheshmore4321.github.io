import React, { Component } from 'react';

class ContactMeJSON extends Component {
  render() {
    return (
        <>
            "contactme": {"{"}
                "mobileNumber":"{this.props.data.mobileNumber}",
                "address":"{this.props.data.address}",
                "emailId":"{this.props.data.emailId}",
                "feedback_link":"{this.props.data.feedback_link}"
            {"}"}
        </>
    )
  }
}
export default ContactMeJSON;
