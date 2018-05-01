module.exports = function(sequelize, Datatypes) {
	const Song = Sequelize.define('Song', {
		music: DataTypes.ARRAY
	});

	Song.associate = function(models) {
		Song.hasMany(models.Post, {
			onDelete: 'cascade'
		});
	};

	return Song;
}