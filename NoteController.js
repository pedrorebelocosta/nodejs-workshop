const Note = require('./Note');

module.exports = {
	create: function (req, res, next) {
		// TODO Create a new record on the database
		const note = new Note(req.body);
	},
	readAll: function (req, res, next) {
		// TODO Read All the notes on the database
	},
	update: async function (req, res, next) {
		// TODO update a record on the database
		const noteID = req.params.id;
	},
	delete: async function (req, res, next) {
		// TODO remove a record on the database
		const noteID = req.params.id;
	}
}
