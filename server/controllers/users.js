const myUserModel = require ('../models').User;

const randPicUrl = 'https://dog.ceo/api/breeds/image/random';

exports.getUser = async (req, res) => { // returns a promise because of async
    // const resp = await fetchRequest(); // here resp is an object
    // console.log(resp.message); //add here the function
    // createNewUser(resp);
  }

exports.getAllUsers = async(req, res) => {

 const users = await myUserModel.findAll();
 res.json(users)

}

  exports.deleteUser = async (req, res) => {
    console.log(req.params.id, 'this is the req');
    await myUserModel.destroy({
      where: {id: req.params.id}
    });
    res.sendStatus(204);
  }

  exports.updateUser = async (req, res) => {
    await myUserModel.editOne(/*here is the query*/);
  }

  exports.createNewUser = async (req, res) => {
    console.log(req,"-----------");

    const pupper = await myUserModel.create({
      name: req.body.name,
      picture: req.body.picture,
      description: req.body.description,
      gender: req.body.gender
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