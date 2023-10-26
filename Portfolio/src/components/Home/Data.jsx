import React from 'react';
import paperSvg from '/public/paper-plane-solid.svg';

const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>Linas Ulevičius</h1>
      <h3 className='home__subtitle'>Front End Developer</h3>
      <p className='home_description'>Apie išsilavinima</p>
      <a href='contact' className='button button--fle'>
        Labas <img src={paperSvg} alt='SVG Image' />
      </a>
    </div>
  );
};
export default Data;
