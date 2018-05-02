const Sequelize = require('sequelize');

const sequelize = new Sequelize('piano_db', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;