import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    return (
      <div>
              <section id="sec_contactme" class="sym-contact" data-section="contactme">
        <div class="sym-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Get in Touch</span>
              <h2 class="sym-heading">Contact</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div class="sym-icon">
                  <i class="icon-globe-outline"></i>
                </div>
                <div class="sym-text">
                  <p><a href="mailto:MaheshMore4321@gmail.com">MaheshMore4321@gmail.com</a></p>
                </div>
              </div>
              <div class="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="sym-icon">
                <i class="icon-map"></i>
              </div>
              <div class="sym-text">
                <p>Mumbai, India</p>
              </div>
            </div>
            <div class="sym-feature sym-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="sym-icon">
                <i class="icon-phone"></i>
              </div>
              <div class="sym-text">
                <p><a href="tel://">+91 9768940268</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-md-push-1">
            <div class="row">
              <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                <form action="">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject"/>
                  </div>
                  <div class="form-group">
                    <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" class="btn btn-primary btn-send-message" value="Send Message"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      </div>
    )
  }
}
export default ContactMe;
