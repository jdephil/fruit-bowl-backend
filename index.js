const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('etag');



// CONTROLLERS //

const tipsController = require('./controllers/tips');
const favoritesController = require('./controllers/favorites')
app.use('/api/tips', tipsController);
app.use('/api/favorites', favoritesController)

// END CONTROLLERS //



app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`Fruitbowl-backend is running on port ${app.get('port')}`);
});
