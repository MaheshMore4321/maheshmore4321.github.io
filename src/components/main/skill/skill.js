import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <div>
              <section class="sym-skills" data-section="skill">
        <div class="sym-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">My Skills</span>
              <h2 class="sym-heading animate-box">Technical Skills</h2>
            </div>
          </div>
          <div class="row" style={{margintop:'15px'}}>
              <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div class="fancy-collapse-panel">
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillOne" aria-expanded="false" aria-controls="collapseTwo">Programming Languages
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                          <p style={{marginbottom:'0px'}}>Java - 1.8</p>
                          <ul>
                            <li>Core Java (J2SE)</li>
                            <li>Advanced Java (J2EE)</li>
                          </ul>							
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillTwo" aria-expanded="false" aria-controls="collapseThree">Framework &amp; Technology
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Spring Framework - 2.2.0</p>
                              <ul>
                                <li>Spring Core</li>
                                <li>Spring MVC</li>
                                <li>Spring Boot</li>
                              </ul>
                              <p style={{marginbottom:'0px'}}>Hibernate - 5.6.1</p>
                              <p style={{marginbottom:'0px'}}>Web Services</p>
                            </div>
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Ecore Framework</p>
                              <p style={{marginbottom:'0px'}}>Hugo</p>
                              <p style={{marginbottom:'0px'}}>Java Persistance API - JPA</p>
                              <p style={{marginbottom:'0px'}}>Slf4j - Log4J</p>
                              <p style={{marginbottom:'0px'}}>Junit</p>
                              <p style={{marginbottom:'0px'}}>Maven</p>
                            </div>
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Collection Framework</p>
                              <p style={{marginbottom:'0px'}}>Multithreading</p>
                              <p style={{marginbottom:'0px'}}>Java Database Connectivity - JDBC</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillThree" aria-expanded="false" aria-controls="collapseThree">Integrated Development Environment (IDE)
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Eclipse</p>
                              <p style={{marginbottom:'0px'}}>STS</p>
                              <p style={{marginbottom:'0px'}}>Intellij-IDEA</p>
                            </div>
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>VScode</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillFour" aria-expanded="false" aria-controls="collapseThree">Databases
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>MySQL</p>
                              <p style={{marginbottom:'0px'}}>MariaDB</p>
                              <p style={{marginbottom:'0px'}}>MsSQL</p>
                            </div>
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Oracle Sql Server</p>
                              <p style={{marginbottom:'0px'}}>IBM Netezza Server</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillFive" aria-expanded="false" aria-controls="collapseThree">Operating Systems (OS)
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Windows</p>
                              <p style={{marginbottom:'0px'}}> Linux (GUI &amp; CLI)</p>
                              <p style={{marginbottom:'0px'}}>CentOs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillSix" aria-expanded="false" aria-controls="collapseThree">Software
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Putty</p>
                              <p style={{marginbottom:'0px'}}> Cyber-Duck</p>
                              <p style={{marginbottom:'0px'}}>FileZilla</p>
                            </div>
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                                <p style={{marginbottom:'0px'}}>SSMS</p>
                              <p style={{marginbottom:'0px'}}> Database Studio</p>
                              <p style={{marginbottom:'0px'}}>Arcon PMS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSkillEt" aria-expanded="false" aria-controls="collapseThree">Version Control System
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSkillEt" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                          <div class="row">
                            <div class="col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3">
                              <p style={{marginbottom:'0px'}}>Git</p>
                              <p style={{marginbottom:'0px'}}> TortoiseGit</p>
                              <p style={{marginbottom:'0px'}}>EclipseGit</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      
      </div>
    );
  }
}
export default Skill;
