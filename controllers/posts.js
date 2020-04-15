const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../middleware/auth');

//Get all videos
router.get('/', auth, (req, res) => {
	let userId = req.userId;
	db.Post.find({ userId })
		.then(() => res.json())
		.catch(err => res.json(err));
});

//Create video
router.post('/', auth, (req, res) => {
	let userId = req.userId;
	const newPost = { userId, ...req.body };
	db.Post.create(newPost)
		.then(() => res.json())
		.catch(err => res.json(err));
});

module.exports = router;
