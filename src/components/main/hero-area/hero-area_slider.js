import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 

class HeroAreaSlider extends Component {
  constructor(props){
		super(props)

		this.state = {
      heroarea_: []
    }

    axios.get(api.heroarea_api)
		.then(response =>{ 
      console.log(response);
      this.setState({heroarea_: response.data});
		})
		.catch(error =>{
			console.log(error);
    })
  }

  // componentWillMount(){
	// 	axios.get(api.heroarea_api)
	// 	.then(response =>{ 
  //     console.log(response);
  //     this.setState({heroarea_: response.data});
	// 	})
	// 	.catch(error =>{
	// 		console.log(error);
  //   })
  // } 

  render() {
    const {heroarea_} = this.state;
    console.log(heroarea_);
    console.log(heroarea_[0]);
    console.log(heroarea_[1]);
    console.log(heroarea_[2]);
    
    const heroarea_0 = heroarea_[0];
    const heroarea_1 = heroarea_[1];
    const heroarea_2 = heroarea_[2];
    console.log(heroarea_0);
    console.log(heroarea_1);
    console.log(heroarea_2);
    return (
      <>
      { heroarea_  !== undefined &&
        heroarea_0 !== undefined && 
        heroarea_0.backgroundImg !== undefined &&
        heroarea_0.text !== undefined &&
        heroarea_0.link !== undefined &&
        heroarea_0.icon !== undefined &&

         <li style={{backgroundImage:`url(${heroarea_0.backgroundImg})`}}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          {heroarea_0.headerLine}
                          <p><a className="btn btn-primary btn-learn" href={heroarea_0.link} target="_blank" rel="noopener noreferrer">{heroarea_0.text}<i className={heroarea_0.icon}></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
       }
              <li style={{backgroundImage:'url(images/img_bg_1.jpg)'}}>
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                          <div className="desc">
                            <h1>I love building<br/>THINGS!!</h1>
                              <p><a className="btn btn-primary btn-learn" href="https://coderstea.com" target="_blank" rel="noopener noreferrer">View&nbsp;My&nbsp;BlogSite&nbsp;<i className="icon-book"></i></a></p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{backgroundImage:'url(images/img_bg_3.jpg)'}}>
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                          <div className="desc">
                            <h1>Let's have a<br/>Talk!!</h1>
                            <p><a className="btn btn-primary btn-learn" href="#sec_contactme" data-nav-section="contactme">Contact&nbsp;me&nbsp;<i className="icon-briefcase3"></i></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </li>
      </>
    );
  }
}
export default HeroAreaSlider;