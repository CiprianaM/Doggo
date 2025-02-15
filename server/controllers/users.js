const myUserModel = require("../models").User;
const myExtendedUserModel = require("../models").User_extended;

const randPicUrl = "https://dog.ceo/api/breeds/image/random";

exports.getUser = async (req, res) => {
};

exports.getAllUsers = async (req, res) => {
  const users = await myUserModel.findAll();
  res.json(users);
};
exports.getAllCreated = async (req, res) => {
  const users = await myExtendedUserModel.findAll();
  res.json(users);
};
exports.getNewlyCreated = async (req, res) => {
    const user = await myExtendedUserModel.findOne({
    where: { id: req.params.id }});

  res.json(user);
};
exports.updatePupperProfile = async (req, res) => {
  const { id } = req.body;
  Object.keys(req.body).forEach(key => req.body[key] === '' && delete req.body[key]);
    try {
      const updatedUser=  await myExtendedUserModel.update(
          req.body,
          { where: { id } ,
          returning: true
          },

        )
    res.json(updatedUser);
  } catch (err) {
    res.send({ error: err})
    res.status(500)
  }
};


exports.deleteUser = async (req, res) => {
  await myUserModel.destroy({
    where: { id: req.params.id }
  });
  res.sendStatus(204);
};

exports.updateUser = async (req, res) => {
  await myUserModel.editOne(/*here is the query*/);
};

exports.createNewUser = async (req, res) => {
  const pupper = await myExtendedUserModel.create({
    picture: req.body.photo,
    gender: req.body.gender,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmpass: req.body.confirmPass,
    description: req.body.description
  });
  res.status(201);
  res.json(pupper);
};
exports.createNewSimpleUser = async (req, res) => {

  const pupper = await myUserModel.create({
    picture: req.body.picture,
    gender: req.body.gender,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmpass: req.body.confirmPass,
    description: req.body.description
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
