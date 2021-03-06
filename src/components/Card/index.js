import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';

const MyModal = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.description}</p>
        <p>
          <span className='technologies-text'>Technologies Used:</span>{' '}
          {props.technologies}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {props.href ? (
          <a href={props.href} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={['fas', 'external-link-square-alt']}
              size='3x'
            />
          </a>
        ) : (
          ''
        )}
        {props.video ? (
          <a href={props.video} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'youtube-square']} size='3x' />
          </a>
        ) : (
          ''
        )}
        <a href={props.github} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={['fab', 'github-square']} size='3x' />
        </a>
        <FontAwesomeIcon
          onClick={props.onHide}
          icon={['fas', 'times-circle']}
          size='3x'
        />
      </Modal.Footer>
    </Modal>
  );
};

const Card = props => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <button className='modalButton' onClick={() => setModalShow(true)}>
        <div className={`card-div col-xs-12 col-sm-6 col-lg-4 ${props.class}`}>
          {
            <div className='card'>
              <img
                className='card-image'
                src={process.env.PUBLIC_URL + props.img}
                alt={props.alt}
              />
              <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
              </div>
            </div>
          }
        </div>
      </button>
      <MyModal
        show={modalShow}
        title={props.title}
        href={props.href}
        github={props.github}
        video={props.video}
        description={props.description}
        technologies={props.technologies}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Card;
