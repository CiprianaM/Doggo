const myUserModel = require ('../models/user');

const randPicUrl = 'https://dog.ceo/api/breeds/image/random';

exports.getPicture = async () => { // returns a promise because of async
    const resp = await fetchRequest(); // here resp is an object
    console.log(resp.message); //add here the function
    createNewUser(resp);
  }

  exports.deleteUser = async (req, res) => {
    await myUserModel.deleteOne({_id: req.params.id});
    res.sendStatus(204);
  }

  exports.updateUser = async (req, res) => {
    await myUserModel.editOne(/*here is the query*/);
  }

  const createNewUser = async (req, res) => {
    const pupper = await myUserModel.create({
      img: req.message,
      name: 'Barker',
      email: 'test@test.com',
      password: '1234',
      description: 'Truly a good boy, might be the best',
      age: 5,
      gender: 'good boy',
      location: 'Barcelona',
      showMe: true
    });
    res.status(201);
    res.json(pupper);
  };

const fetchRequest = (url, options) => {
  return fetch(`${randPicUrl}`, options)
    .then(res => (res.status < 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => console.log(error));
};