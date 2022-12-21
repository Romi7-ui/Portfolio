import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";




function About() {


  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  



  return (
    <div className="about component__space" id="About">
  
    
      <div className="container">
        <div className="row">

          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
          
              <p className="about__text p__color">
              “ Hello, I’m Ramanuj ! I’m passionate about software development and I’m skilled in HTML, CSS, JavaScript, and React.
              </p>
              <p className="about__text p__color">
              In the years, I’ve cultivated my passion for coding by studying the IT field and I was completely hooked to the world of computers.
              </p>
              <p className="about__text p__color">
              Lately, I’ve discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio. I’m now looking for a junior dev position to finally kick start my career and learn among professionals. ”
              </p>

             
              <a href="RESUME.pdf" download="WEBAPP RESUME.pdf">
                  <button className="neon effect ">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="neon effect ">Hire Me</button>
                </a>
              
               
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
