import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Tienda por Departamentos</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>BICICLETAS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>TOMATODO</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;