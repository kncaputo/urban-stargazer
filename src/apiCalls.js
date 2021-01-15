const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const endpoint = 'https://api.nasa.gov/planetary/apod';

export const fetchPicturePicturesFromRange = (startDate, endDate) => {
  return fetch(`${endpoint}?api_key=${NASA_API_KEY}5&start_date=${startDate}&end_date=${endDate}`)
  .then(response => {
    if (!response.ok) {
      throw Error
    } 
    return response.json()
  })
}

export const fetchPictureFromDate = (date) => {
  return fetch(`${endpoint}?api_key=${NASA_API_KEY}5&date=${date}`)
  .then(response => {
    if (!response.ok) {
      throw Error
    } 
    return response.json()
  })
}