import React from 'react';
import Mission from "../components/Mission";
import Team from "../components/Team";
import Mentor from "../components//Mentor";
import Contact from "../components/Contact";
function Abouts() {
  return (
    <div className='about'>

      {/* <div className="container">
        <div className="row "> */}


        <Mission/>
        <Team/>
        <Mentor/>

        </div>
    //   </div>

    // </div>
  );
}

export default Abouts;
