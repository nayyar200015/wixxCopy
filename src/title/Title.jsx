import React from 'react';
import './style.css';

const Title = () => {
  window.addEventListener('scroll', () => {
    document.getElementById('sec').style.backgroundSize = 250 - +window.pageYOffset/28 + '%';
  })
  return (
    <div className='section2 d-flex align-items-end' id='sec'>
      <div className="container">
        <div className="row text-center h-100">
          <div className="col-md-12 parts text-capitalize">
            <h3>developing innovative strategies</h3>
          </div>
          <div className="col-md-12 parts text-uppercase">
            achieving growth
          </div>
          <div className="col-md-12 parts">
            <a href="#" className='text-capitalize bt'>book a consulation</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
