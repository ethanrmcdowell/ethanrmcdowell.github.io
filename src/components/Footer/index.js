import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import './style.css';
import useClipboard from 'react-use-clipboard';

function Footer() {
  const [isCopied, setCopied] = useClipboard('ethan.r.mcdowell@gmail.com');
  const renderTooltip = props => (
    <Tooltip id='button-tooltip' {...props}>
      click to copy
    </Tooltip>
  );

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

      <OverlayTrigger
        placement='top'
        delay={{ show: 250, hide: 300 }}
        overlay={renderTooltip}>
        <FontAwesomeIcon
          icon={['fas', 'envelope-square']}
          size='3x'
          onClick={setCopied}
        />
      </OverlayTrigger>
    </div>
  );
}

export default Footer;
