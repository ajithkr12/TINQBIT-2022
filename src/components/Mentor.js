
import React from 'react';
import './Mentor.css';
import { MentorData } from './Data/MentorData';
function Mentor() {
  return (

    <section id="Mentor" className="Mentor mt-0">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          {/* <h2>Team</h2> */}
          <p>Our Mentor</p>
        </div>

        <div className="row gy-4 justify-content-center">
            {
              MentorData.map((item, index) => {
                return (
                      <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-5" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                          <div className="member-img">
                            <img src={item.img} className="img-fluid" alt=""/>
                            <div className="social">
                            <a href="/"><i className="fa fa-twitter"></i></a>
                              <a href="/"><i className="fa fa-facebook"></i></a>
                              <a href="/"><i className="fa fa-instagram"></i></a>
                              <a href="/"><i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                          <div className="member-info">
                            <h4>{item.name}</h4>
                            <span>{item.position}</span>
                            {/* <p>{item.description}</p> */}
                          </div>
                        </div>
                      </div>
                );
              })}
        </div>
      </div>

    </section>
 

  );
}

export default Mentor;