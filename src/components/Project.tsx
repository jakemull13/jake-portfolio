import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project placeholder">
            <h2>Coming Soon</h2>
            <p>Jake Mullins' personal projects will be added here. Stay tuned!</p>
          </div>
        </div>
      </div>
    );
}

export default Project;