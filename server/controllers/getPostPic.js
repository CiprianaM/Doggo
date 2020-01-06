const randPicUrl = 'https://dog.ceo/api/breeds/image/random';

exports.getPicture = async () => { // returns a promise because of async
    const resp = await fetchRequest(); // here resp is an object
    console.log(resp); //add here the function
  }

const fetchRequest = (url, options) => {
  return fetch(`${randPicUrl}`, options)
    .then(res => (res.status < 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => console.log(error));
};