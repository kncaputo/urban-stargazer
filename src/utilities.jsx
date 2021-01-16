export const saveToLocalStorage = (imagesToSave) => {
  localStorage.clear();
  let stringifiedImages = JSON.stringify(imagesToSave);
  localStorage.setItem('savedImages', stringifiedImages);
}