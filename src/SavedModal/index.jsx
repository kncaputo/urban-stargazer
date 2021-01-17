import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';
import './SavedModal.scss';

const SavedModal = (props) => {
  const { title, url } = props.displayImage;
  const { deleteSavedImage } = props.deleteSavedImage;
  const { closeModal } = props.closeModal;

  return (
    <IconContext.Provider value={{ color: 'white'}}>
      <section id='saved-modal-box'>

        <section id='modal-button-box'>
          <button className='modal-button' onClick={deleteSavedImage}>Remove from Saved</button>
          <AiOutlineClose className='modal-button' onClick={closeModal}/>
          {/* <button className='modal-button' onClick={closeModal}><AiOutlineClose onClick={closeModal}/></button> */}
        </section>

        <section>
          <img id='modal-image' src={`${url}`} alt={`${title}`}/>
        </section>
        <section>
          <h4 id='modal-title'>{title}</h4>

        </section>
      </section>  
    </IconContext.Provider>
  ) 
}

export default SavedModal;