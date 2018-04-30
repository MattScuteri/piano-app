const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models');

app.use(bodyParser.urlEncoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//Routes

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT ' + PORT);
	});
});