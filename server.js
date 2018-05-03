const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();
const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.Promise = Promise;
const mongoURL = 'mongodb://localhost/pianodb'

mongoose.connect(mongoURL);

db.Song.create(req.body)
	.then(function(dbSong) {
		console.log(dbSong);
	})
	.catch(function(err) {
		console.log(err)
	})
//Routing
router.get('/api', (req, res) => {
	res.status(200).send({message: 'Hello World!'})
})

app.use(router);

app.listen(PORT);

console.log('App listening on port ' + PORT);