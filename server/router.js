const router = require ('express').Router();
const {getPicture} = require ('./controllers/getPostPic');

// console.log('test');
router.get('', getPicture);
// router.post('/topics', createTopic);
// router.delete('/topics/:id', deleteTopic);
// router.put('/topics/:id', updateTopic);

module.exports = router;