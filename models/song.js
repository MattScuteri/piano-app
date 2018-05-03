const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SongSchema = new Schema({
	array: Array,

	date: {
		type: Date,
		default: Date.now
	}
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;