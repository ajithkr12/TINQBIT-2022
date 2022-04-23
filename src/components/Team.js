
import React from 'react';
import './Team.css';
import { TeamData } from './Data/TeamData';
function Team() {
  return (

    <section id="team" className="team">

      <div className="container" data-aos="fade-up">

        <div className="section-header col-lg-12 col-md-12 col-sm-12">
          <h2>Team</h2>
          <p>Our hard working team</p>
        </div>

        <div className="row gy-4 justify-content-center">
            {
              TeamData.map((item, index) => {
                return (
                      <div className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch mb-5" data-aos="fade-up" data-aos-delay="100">
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

export default Team;