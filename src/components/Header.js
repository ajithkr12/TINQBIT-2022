import React from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
function Header() {

  return (
    <div className="header">
      <div className="container">
        <div className="row ">
          <div className="home col-lg-12">
            <h1>A one-stop-shop for all your technical needs...</h1>
          </div>
          <div class="cont col-lg-12" >
            {/* <div class="field">
              <div class="mouse"></div>
            </div> */}
              <div className="scroll-down"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;

