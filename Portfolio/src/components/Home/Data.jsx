import React from 'react';
import svgImage from '.src/assets/Linas.svg';
const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>Linas Ulevičius</h1>
      <img src={svgImage} alt='SVG Image' />
    </div>
  );
};
export default Data;
