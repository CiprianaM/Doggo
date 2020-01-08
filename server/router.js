const router = require ('express').Router();
const {getPicture} = require ('./controllers/getPostPic');

// console.log('test');
router.get('/pupper', getPicture);
router.get('/profile', getPicture);
//sign in? create profile?
// router.post('/signup', createProfile);
// router.delete('/topics/:id', deleteTopic);
// router.put('/topics/:id', updateTopic);

module.exports = router;