import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import './SavedModal.scss';

const SavedModal = (props) => {
  const { title, url, explanation } = props.displayImage;
  const { deleteSavedImage } = props.deleteSavedImage;
  const { closeModal } = props.closeModal;

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <section id='saved-modal-box'>

        <section id='modal-button-box'>
          <BsFillStarFill className='modal-icon' alt='Remove from Saved' onClick={deleteSavedImage}/>
          <AiOutlineClose className='modal-icon' alt='Close modal' onClick={closeModal}/>
        </section>

        <section>
          <img id='modal-image' src={`${url}`} alt={`${title}`}/>
        </section>
        <section>
          <h4 id='modal-title'>{title}</h4>
          <section id='modal-explanation'>{explanation}</section>
        </section>
      </section>  
    </IconContext.Provider>
  ) 
}

export default SavedModal;