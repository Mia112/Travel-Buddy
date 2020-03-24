const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		required: true,
		default:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiTpL5cDSP7-7PqBFa78ejlmBgZVO0hXm-KUQBej0mh4A0M8sO'
	}
});

module.exports = User = mongoose.model('users', UserSchema);
