const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const db = require('./models');
const router = express.Router();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/pianodb';

mongoose.connect(mongoURL, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log('App connected!');
	}
});

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

app.listen(PORT, function() {
	console.log('App listening on port ' + PORT);
});

