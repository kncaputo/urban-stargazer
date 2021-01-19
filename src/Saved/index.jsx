import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { saveToLocalStorage } from '../utilities/utilities';
import Modal from 'react-modal';
import './Saved.scss';
import { modalStyles } from './modalStyles';
import SavedModal from '../SavedModal';

const Saved = () => {
  const [savedImages, setSavedImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [displayImage, setDisplayImage] = useState({});

  useEffect(() => {
    const retrievedImages = localStorage.getItem('savedImages');
    let images = JSON.parse(retrievedImages);
    setSavedImages(images);
    Modal.setAppElement('body');
  }, [])

  const openModal = (date) => {
    const displayImage = savedImages.find(image => {
      return image.date === date
    })
    setDisplayImage(displayImage);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const deleteSavedImage = (date) => {
    closeModal();
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
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <SavedModal
          displayImage={displayImage}
          closeModal={closeModal}
          deleteSavedImage={deleteSavedImage}
        />  
      </Modal>
    </main>
  )
}

export default Saved;