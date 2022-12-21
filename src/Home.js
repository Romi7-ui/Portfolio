import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";
import TypeWriterEffect from 'react-typewriter-effect';



function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [state] = useState({
    title: "WELCOME TO MY WORLD",
    titleTwo: "Hello, this is ",
  });
  const [show, setShow] = useState(true);







  return (
    <div className="home" id="Home">
      <div className="home__bg" >
        <div className="header d__flex align__items__center pxy__30">
         
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                <li className="nav__items mx__15">Home</li>
              </Link>
              <Link to="About" spy={true} smooth={true} offset={-100} duration={500}>
                <li className="nav__items mx__15">About</li>
              </Link>
              <Link to="Services" spy={true} smooth={true} offset={-100} duration={500}>
                <li className="nav__items mx__15">Services</li>
              </Link>
             
              <Link to="Blog" spy={true} smooth={true} offset={-100} duration={500}>
                <li className="nav__items mx__15">Projects</li>
              </Link>
              <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500}>
                <li className="nav__items mx__15">Contact</li>
              </Link>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services">Services</a>
                </li>
              
                <li className="sideNavbar">
                  <a href="#Blog">Projectjs</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="welcome pz__10">
                {state.title}
              </h1>
              <h2 className="home__text pz__10">
                {state.titleTwo}
              </h2>

             
              
                <TypeWriterEffect className="typeEffect"
                  textStyle={{
                    fontFamily: 'Montserrat,sans-serif',
                    color: '#E67027',
                    fontWeight: 800,
                    fontSize: '50px',
                  }}
                  startDelay={500}
                  cursorColor="#3F3D56"
                  multiText={[
                    'Ramanuj Dasgupta 😃',
                    'I am a B.tech Graduate... ',
                    'And Web Developer 🤠',
                    'Flexible and willing to work',
                   
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                  multiTextLoop
                />
              

              <h4 className="home__text pz__10">based in INDIA.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



