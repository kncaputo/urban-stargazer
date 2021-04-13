const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY
const endpoint = 'https://api.nasa.gov/planetary/apod';

export const fetchPictureFromDate = (date) => {
  return fetch(`${endpoint}?api_key=${NASA_API_KEY}&date=${date}`)
  .then(response => {
    if (!response.ok) {
      throw Error
    } 
    return response.json()
  })
};