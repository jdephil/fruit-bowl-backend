const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('etag');


// CONTROLLERS //

const tipsController = require('./controllers/tips');
app.use('/api/tips', tipsController);

// END CONTROLLERS //

// const port = process.env.PORT || 8001;

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`Fruitbowl-backend is running on port ${app.get('port')}`);
});
