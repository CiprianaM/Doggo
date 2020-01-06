const mongoose = require ('mongoose');
const mongoDB = 'mongodb://localhost/DoggosDB';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error)=> console.log('Successfully connected to DB!'));
module.exports = {mongoose};

