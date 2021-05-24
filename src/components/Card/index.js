import React, { useState } from 'react';
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
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
            /* </div>/<a href={props.href} target='_blank' rel='noreferrer'> */
            <div className='card'>
              <img src={process.env.PUBLIC_URL + props.img} alt={props.alt} />
              <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
              </div>
            </div>
            /* </a> */
          }
        </div>
      </button>
      <MyModal
        show={modalShow}
        title={props.title}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Card;
