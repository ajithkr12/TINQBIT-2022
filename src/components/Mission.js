
import React from 'react';
import './Mission.css';
import { MissionData } from './Data/MissionData';

function Mission() {
  return (


    <section id="values" className="values">
      <div className="container">

        <div class="section-header col-lg-12 col-md-12 col-sm-12">
          <h2>Mission & Vision</h2>
          <p>Our Mission & Vision</p>
        </div>

        <div className="row ab">
          {
            MissionData.map((item, index) => {
              return (
                    <div className="col-lg-5 col-md-6 col-sm-6 mt-4 mt-lg-0" >
                      <div className="box">
                        <img src={item.img} className="" alt=""/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
              );
            })}

        </div>

      </div>
    </section>

  );
}

export default Mission;