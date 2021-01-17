import React, { useState, useEffect } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import Card from '../Card';
import { saveToLocalStorage } from '../utilities';
import Modal from 'react-modal';
import './Saved.scss';
import SavedModal from '../SavedModal';

// Modal.setAppElement('')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0/75%)',
  }
 
};

const Saved = (props) => {
  const [savedImages, setSavedImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [displayImage, setDisplayImage] = useState({});

  useEffect(() => {
    const retrievedImages = localStorage.getItem('savedImages')
    let images = JSON.parse(retrievedImages)
    setSavedImages(images)
  }, [])

  const openModal = (date) => {
    const displayImage = savedImages.find(image => {
      return image.date === date
    })
    setDisplayImage(displayImage);
    setIsOpen(true);
  }

  const afterOpenModal = () => {

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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SavedModal
          displayImage={displayImage}
          closeModal={closeModal}
          deleteSavedImage={deleteSavedImage}
        />  
        {/* <section>
          <h2>{displayImage.title}</h2>
          <img src={`${displayImage.url}`} alt={`${displayImage.title}`}/>
          <button onClick={closeModal}>close</button>
          <button onClick={closeModal}>close</button>
        </section>   */}
      </Modal>
    </main>
  )
}

export default Saved;