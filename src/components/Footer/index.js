import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import useClipboard from 'react-use-clipboard';

function Footer() {
  const [isCopied, setCopied] = useClipboard('ethan.r.mcdowell@gmail.com', {
    successDuration: 1000,
  });
  return (
    <div className='contact'>
      <a
        href='https://github.com/ethanrmcdowell'
        target='_blank'
        rel='noreferrer'>
        <FontAwesomeIcon icon={['fab', 'github-square']} size='3x' />
      </a>
      <a
        href='https://www.last.fm/user/spartaoverboard'
        target='_blank'
        rel='noreferrer'>
        <FontAwesomeIcon icon={['fab', 'lastfm-square']} size='3x' />
      </a>
      <a
        href='https://www.linkedin.com/in/ethan-r-mcdowell/'
        target='_blank'
        rel='noreferrer'>
        <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' />
      </a>
      <FontAwesomeIcon
        icon={['fas', 'envelope-square']}
        size='3x'
        onClick={setCopied}
      />
      <div className='copiedDiv'>
        <p className='copiedAlert'>{isCopied ? 'Copied to clipboard!' : ''}</p>
      </div>
    </div>
  );
}

export default Footer;
