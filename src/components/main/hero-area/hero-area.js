import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 
import parse from 'html-react-parser';
import HeroAreaSlid from './hero-area_slide'

class HeroArea extends Component {
  constructor(props){
		super(props)

		this.state = {
      heroarea_: []
    }

    //this.getData = this.getData.bind();
  }

  componentDidMount(){
		axios.get(api.heroarea_api)
		.then(response =>{
      this.setState({heroarea_: response.data});
		})
		.catch(error =>{
			console.log(error);
    })
  } 

  render() {
    let {heroarea_} = this.state; 
    console.log("heroarea_1 :: "+heroarea_);

    const numbers = [1, 2, 3];
    const doubled = numbers.map((number) => number * 2);
    return (
      <>
        <section id="sym-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            {console.log("heroarea_2 :: "+heroarea_)}
            {!heroarea_.length && this.setState({heroarea_:doubled})}
            {console.log("heroarea_3 :: "+heroarea_)}
            {
              heroarea_.map(heroarea_inner => 
                <HeroAreaSlid data = {heroarea_inner}/>
              )
            }
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default HeroArea;

function getData(dataS) {
  console.log(dataS);
  return dataS.map(function (data) {
      return (
        <li style={{backgroundImage:`url(${data.backgroundImg})`}}>
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc">
                  <h1>
                  {
                    data && data.headerLine !== undefined &&
                    parse(data.headerLine)
                  }
                  </h1>
                  <p><a className="btn btn-primary btn-learn" href={data && data.link !== undefined && data.link} target="_blank" rel="noopener noreferrer">
                  {
                    data && data.text !== undefined &&
                    parse(data.text)
                  }
                  <i className={data && data.icon !== undefined && data.icon}></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> 
      )
    }
  )
}
function Components(data){
  return(
        <>
        
        </>
  );
  // '<li style=backgroundImage=url('+data.backgroundImg+')>'+
  //         '<div className="overlay"></div>'+
  //         '<div className="container-fluid">'+
  //           '<div className="row">'+
  //             '<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">'+
  //               '<div className="slider-text-inner js-fullheight">'+
  //                 '<div className="desc">'+
  //                   '<h1>'+
  //                     data.headerLine
  //                   + '</h1>'+
  //                   '<p><a className="btn btn-primary btn-learn" href='+data.link+' target="_blank" rel="noopener noreferrer">'+
  //                     data.text
  //                   + '<i className='+data.text+'></i></a></p>'+
  //                 '</div>'+
  //               '</div>'+
  //             '</div>'+
  //           '</div>'+
  //         '</div>'+
  //       '</li>';
}