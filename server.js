const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');

const app = express();
const auth = require('./routes/api/auth');
const posts = require('./routes/api/posts');

require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./models/User.js');

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['secret']
	})
);

const db = require('./config/keys').mongoURI;

mongoose.set('useCreateIndex', true);

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('connected', () => {
	console.log('Database connection successfully');
});
connection.on('error', err => {
	console.log('Mongoose default connection error: ' + err);
});

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

app.use('/api/auth', auth);
app.use('/api/posts', posts);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
	console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
