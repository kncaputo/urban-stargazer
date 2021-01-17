import React, { useState, useEffect } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import Card from '../Card';
import { saveToLocalStorage } from '../utilities';
import Modal from 'react-modal';
import './Saved.scss';

// Modal.setAppElement('')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Saved = (props) => {
  const [savedImages, setSavedImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const retrievedImages = localStorage.getItem('savedImages')
    let images = JSON.parse(retrievedImages)
    setSavedImages(images)
  }, [])

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const deleteSavedImage = (date) => {
    const newSavedImages = savedImages.filter(savedImage => {
      return savedImage.date !== date
    })

    saveToLocalStorage(newSavedImages);
    setSavedImages(newSavedImages);
  }

  const createCards = () => {
    if (savedImages !== null) {
      return savedImages.map(image => {
        const { url, title, date } = image;
        return (
          <Card 
          key={date}
          src={`${url}`}
          title={title}
          date={date}
          openModal={openModal}
        />  
        )
      })
    }
  }

  return(
    <main id='card-box'>
      {createCards()}
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    </main>
  )
}

export default Saved;