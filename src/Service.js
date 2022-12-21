import React from "react";
import "./Service.css";
import js from "./img/js.png";
import htmll from "./img/htmll.png";
import css from "./img/css.png";
import bt from "./img/bt.png";
import sass from "./img/sass.png";
import react from "./img/react.png";
import node from "./img/node.png";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">My Development Skills</h1>
       
      </div>



      <div className="cont">
        <div className="roww">
          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={htmll} alt="" />
                </div>
                <h1 className="service__text"> HTML</h1>

                <div className='skill-bar'>
                  <span className='skill-per html'>
                    <span className='tooltip'>90%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={css} alt="" />
                </div>
                <h1 className="service__text"> CSS</h1>
                <div className='skill-bar'>
                  <span className='skill-per css'>
                    <span className='tooltip'>80%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={sass} alt="" />
                </div>
                <h1 className="service__text"> SASS</h1>
                <div className='skill-bar'>
                  <span className='skill-per sass'>
                    <span className='tooltip'>80%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={bt} alt="" />
                </div>
                <h1 className="service__text"> BOOTSTRAP</h1>
                <div className='skill-bar'>
                  <span className='skill-per bootstrap'>
                    <span className='tooltip'>85%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={js} alt="" />
                </div>
                <h1 className="service__text"> JAVA SCRIPT</h1>
                <div className='skill-bar'>
                  <span className='skill-per javascript'>
                    <span className='tooltip'>85%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={react} alt="" />
                </div>
                <h1 className="service__text"> REACT JS</h1>
                <div className='skill-bar'>
                  <span className='skill-per reactjs'>
                    <span className='tooltip'>80%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="coll__3">

            <div className='service__boxx pointer'>

              <div className='skill-box'>
                <div className="picon">
                  <img src={node} alt="" />
                </div>
                <h1 className="service__text"> NODE JS</h1>
                <div className='skill-bar'>
                  <span className='skill-per nodejs'>
                    <span className='tooltip'>60%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>


      <div className="heading">
        <h1 className="heading">My Education</h1>
       
      </div>



      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon"> <i class="ri-bank-line"></i>

             
              </div>
              <div className="service__meta">
                <h1 className="service__text">GANDHI INSTITUTE FOR TECHNOLOGICAL ADVANCEMENT, Bhubaneswar</h1>
                
                
                <p className="p service__text p__color">
                BACHELOR OF TECHNOLOGY
                </p>
               
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon"><i class="ri-government-line"></i>
               
              </div>
              <div className="service__meta">
                <h1 className="service__text">AMANAT ALI INTER SCIENCE COLLEGE, Ranchi</h1>
                <p className="p service__text p__color">
                  INTERMEDIATE
                </p>
          
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon"><i class="ri-hotel-line"></i>
              
              </div>
              <div className="service__meta">
                <h1 className="service__text">M.B D.A.V PUBLIC SCHOOL,         
                lohardaga</h1>
                <p className="p service__text p__color">
                  METRICULATION
                </p>
               
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Service;
