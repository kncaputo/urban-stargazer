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

export const generateRandomDate = () => {
  const year = `20${getRandomValue(20)}`;
  const month = `${getRandomValue(12)}`;
  const day = `${getRandomValue(28)}`;

  return `${year}-${month}-${day}`;
}

const getRandomValue = (multiple) => {
  let value = Math.floor((Math.random() *  multiple) + 1);
  value = value.toString();

  if (value.length < 2) {
    value = '0' + value;
  }
  return value;
}