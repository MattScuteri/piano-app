const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const router = express.Router();

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.Promise = Promise;
const mongoURL = 'mongodb://localhost/pianodb'

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || mongoURL);

db.Song.create([])
	.then(function(dbSong) {
		console.log(dbSong);
	})
	.catch(function(err) {
		console.log(err)
	})
//Routing
router.get('/api', function(req, res) {
	db.Song.find({})
		.then(function(dbSong) {
			res.json(dbSong);
		}).catch(function(err) {
			res.json(err)
		})
})

router.post('/save', function(req, res) {
	db.Song.create(req.body)
		.then(function(dbSong) {
			return db.Song.findOneAndUpdate({}, { $push: { tags: dbSong } } );
		})
		.then(function(dbSong) {
			res.json(dbUser);
		})
		.catch(function(err) {
			res.json(err);
		})
})

app.use(router);

app.listen(PORT);

console.log('App listening on port ' + PORT);