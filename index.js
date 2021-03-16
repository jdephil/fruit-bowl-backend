const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/api/tips');
});


// CONTROLLERS //

const tipsController = require('./controllers/tips');
const favoritesController = require('./controllers/favorites')
app.use('/api/tips', tipsController);
app.use('/api/favorites', favoritesController)

// END CONTROLLERS //

// const port = process.env.PORT || 8001;
app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`Fruitbowl-backend is running on port ${app.get('port')}`);
});
