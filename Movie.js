const mongoose = require('mongoose');
const db = 'mongodb://breadmovie:junjie123@ds141043.mlab.com:41043/breadmovie';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connetion error: ', error);
  });

const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
