const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchPictureOfDay = () => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}5&start_date=2021-01-01&end_date=2021-01-14`)
  .then(response => {
    if (!response.ok) {
      throw Error
    } 
    return response.json()
  })
}