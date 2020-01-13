const router = require ('express').Router();
// const conf = require('./config.js');
const userController = require ('./controllers/users');
// const writeInFile = require ('./controllers/writeJSON');

router.get('/puppers', userController.getAllUsers);
router.post('/puppers', userController.createNewSimpleUser);
router.post('/signup', userController.createNewUser);
router.get('/signup/:id', userController.getNewlyCreated);
router.get('/signup', userController.getAllCreated);
router.delete('/pupper/:id', userController.deleteUser);
// router.get('/temp', writeInFile);

//sign in? create profile?
// router.post('/signup', createProfile);
// router.delete('/topics/:id', deleteTopic);
// router.put('/topics/:id', updateTopic);

module.exports = router;