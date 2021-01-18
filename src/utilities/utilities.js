export const saveToLocalStorage = (imagesToSave) => {
  localStorage.clear();
  let stringifiedImages = JSON.stringify(imagesToSave);
  localStorage.setItem('savedImages', stringifiedImages);
}

export const filterData = (data) => {
  const { date, explanation, title, url } = data;
  
  const filteredData = {
    date,
    explanation,
    title,
    url
  }

  return filteredData;
}