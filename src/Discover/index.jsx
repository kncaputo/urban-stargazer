import React, { useEffect, useState, useParams } from 'react';
import { fetchPictureFromDate } from '../apiCalls';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { BsStar, BsFillStarFill, BsLink45Deg } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { saveToLocalStorage, filterData } from '../utilities';
import './Discover.scss';

const Discover = (props) => {
  const [image, setImage] = useState({});
  const { title, url, explanation, date } = image;

  useEffect(() => {
    generateRandomImage();
  }, []);

  const generateRandomImage = () => {
    const date = generateRandomDate();

    fetchPictureFromDate(date)
    .then(data => {
      const image = filterData(data);
      setImage(image);
    })
    .catch(error => console.log(error))
    console.log(image)
  }

  const generateRandomDate = () => {
    const year = `20${getRandomValue(20)}`;
    const month = `${getRandomValue(12)}`
    const day = `${getRandomValue(28)}`

    return `${year}-${month}-${day}`;
  }

  // date function
  const getRandomValue = (multiple) => {
    let value = Math.floor((Math.random() *  multiple) + 1)
    value = value.toString();

    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  const handleDiscoverClick = () => {
    generateRandomImage();
  }

  const retrieveFromLocalStorage = () => {
    const retrievedImages = localStorage.getItem('savedImages')
    return JSON.parse(retrievedImages)
  }

  const handleToggleSave = () => {
    image.isSaved === false ? saveImage() : removeFromSaved();
  }

  const saveImage = () => {
    let imagesToSave = [];
    
    const images = retrieveFromLocalStorage();
    if (images) {
      imagesToSave.push(images) 
    }
    imagesToSave.push(image)
    imagesToSave = imagesToSave.flat();

    saveToLocalStorage(imagesToSave);
    setImage({ ...image, isSaved: true });
  }

  const removeFromSaved = () => {
    const { date } = image;
    const images = retrieveFromLocalStorage();

    const newSavedImages = images.filter(savedImage => {
      return savedImage.date !== date;
    })
    saveToLocalStorage(newSavedImages);
    setImage({ ...image, isSaved: false });
  }

  const generateLink = () => {

  }

  return(
    <IconContext.Provider value={{ color: 'white' }}>
      <main id='discover-main'>
        <section id='image-box'>
          <img src={`${url}`} id='image' alt={`${title} from ${date}`}/>
        </section>

        <h2 id='image-title'>{`${image.title}`}</h2>

        <section id='button-box'>
          <BsLink45Deg className='media-icons' onClick={() => {generateLink()}} alt='Get link' data-testid='link-icon' />
          {image.isSaved === false ? 
            <BsStar className='media-icons' onClick={() => {handleToggleSave()}} alt='Save image' data-testid='save-icon'/> :
            <BsFillStarFill className='media-icons' onClick={() => {handleToggleSave()}} alt='Remove from Saved' />
          }
          <button className='media-icons' onClick={() => {handleDiscoverClick()}} data-testid='discover-again'>Discover Again</button>
        </section>

        <section className='explanation-box'>
          <p id='explanation'>{`${image.explanation}`}</p>
        </section>
      </main>
    </IconContext.Provider>
  ) 
}

export default Discover;