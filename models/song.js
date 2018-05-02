const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

module.exports = function(sequelize, Datatypes) {
	const Song = sequelize.define('Song', {
		music: {
			type: Datatypes.STRING
			}
		});

	return Song;
}