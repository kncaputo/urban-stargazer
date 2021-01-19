import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import './SavedModal.scss';

const SavedModal = (props) => {
  const { title, date, url, explanation } = props.displayImage;

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <section id='saved-modal-box'>

        <section id='modal-button-box'>
          <BsFillStarFill 
            className='modal-icon' 
            alt='Remove from Saved' 
            size={27}
            data-testid='remove-saved' 
            onClick={() => props.deleteSavedImage(date)}
          />
          <AiOutlineClose 
            className='modal-icon' 
            alt='Close modal' 
            size={27}
            data-testid='close-saved-modal' 
            onClick={() => props.closeModal()}
          />
        </section>

        <section>
          <img id='modal-image' src={`${url}`} alt={`${title}`}/>
        </section>
        <section>
          <h4 id='modal-title'>{title}</h4>
          <p id='subtitle'>{date}</p>
          <section id='modal-explanation'>{explanation}</section>
        </section>
      </section>  
    </IconContext.Provider>
  ) 
}

export default SavedModal;

SavedModal.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  explanation: PropTypes.string
};