import React from "react";
import "./Blog.css";
import Project1 from './img/portfolio-01.jpg';
import Project2 from './img/portfolio-02.jpg';
import Project3 from './img/portfolio-03.jpg';
import Project4 from './img/portfolio-04.jpg';
import Project5 from './img/portfolio-05.jpg';



function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">PROJECTS</h1>
      
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Food-Recipe</h4>
                         <a href="https://frabjous-centaur-21a77b.netlify.app/" className="blog project__btn btn">VIEW</a>
                       </div>
                 </div>
              </div>

              
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Portfolio</h4>
                         <a href="#Home" className="blog project__btn btn">VIEW</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Netflix-Clone</h4>
                         <a href="https://lively-treacle-3408d6.netlify.app/" className="blog project__btn btn">VIEW</a>
                       </div>
                 </div>
              </div>


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">E-shop</h4>
                         <a href="https://darling-torrone-e43564.netlify.app/" className="blog project__btn btn">VIEW</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Weather-App </h4>
                         <a href="https://subtle-chaja-f81389.netlify.app/" className="blog project__btn btn">VIEW</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
