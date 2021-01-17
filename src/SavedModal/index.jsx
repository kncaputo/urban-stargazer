import React from 'react';
import './SavedModal.scss';

const SavedModal = (props) => {
  const { title, url } = props.displayImage;
  const { deleteSavedImage } = props.deleteSavedImage;
  const { closeModal } = props.closeModal;

  return (
    <section id='saved-modal-box'>

      <section id='modal-button-box'>
        <button className='modal-button' onClick={deleteSavedImage}>Remove from Saved</button>
        <button className='modal-button' onClick={closeModal}>Close</button>
      </section>

      <section>
        <img id='modal-image' src={`${url}`} alt={`${title}`}/>
      </section>
      <section>
        <h4 id='modal-title'>{title}</h4>

      </section>
    </section>  
  ) 
}

export default SavedModal;