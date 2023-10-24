import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.instagram.com/uleviciuslinas/'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href='https://www.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b/'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href='https://github.com/L11nas'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default Social;
