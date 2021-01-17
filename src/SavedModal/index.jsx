import React from 'react';
import './SavedModal.scss';

const SavedModal = (props) => {
  const { title, url } = props.displayImage;
  return (
    <section id='saved-modal-box'>

      <section id='close-button-box'>
        <button onClick={props.closeModal}>close</button>
      </section>

      <section>
        <img id='modal-image' src={`${url}`} alt={`${title}`}/>
      </section>
      <h2>{title}</h2>

      <section id='modal-footer-buttons'>
        <button onClick={props.closeModal}>close</button>
        <button onClick={props.closeModal}>close</button>
      </section>
    </section>  
  ) 
}

export default SavedModal;