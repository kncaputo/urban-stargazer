const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export default function fetchPictureFromDate(url) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      true
        ? resolve('Success')
        : reject({
            error: 'Error',
          }),
    );
  });
}