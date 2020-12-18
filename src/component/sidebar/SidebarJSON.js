import React, { Component } from 'react';

class SidebarJSON extends Component {
  render() {
    return (
        <>
          "sidebar": {"{"}
              "name":"{this.props.data.name}",
              "job_title":"{this.props.data.job_title}",

              "profile_picture_link":"{this.props.data.profile_picture_link}",
              "background_picture_link":"{this.props.data.background_picture_link}",

              "facebook_link":"{this.props.data.facebook_link}",
              "twitter_link":"{this.props.data.twitter_link}",
              "instgram_link":"{this.props.data.instgram_link}",
              "linkedin_link":"{this.props.data.linkedin_link}",
              "github_link":"{this.props.data.github_link}",
              "website_link":"{this.props.data.website_link}"
          {"}"}
        </>
    )
  }
}
export default SidebarJSON;
