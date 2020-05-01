const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');

//Get all post
router.get('/posts', (req, res) => {
	db.Post.find()
		.then(() => res.json())
		.catch((err) => res.json(err));
});

//Create post
router.post('/', auth, (req, res) => {
	const newPost = new Post({
		text: req.body.text,
		name: req.body.name,
		user: req.user.id,
		title: req.body.title,
		photo: req.body.photo,
	});
	console.log(req.body.text);
	db.Post.create(newPost.save())
		.then((post) => res.json(post))
		.catch((err) => res.json(err));
});

module.exports = router;
