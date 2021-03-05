const express = require('express');
const app = express();
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// CONTROLLERS //

const tipControllers = require('./controllers/tips');
app.use('/api/tips', tipControllers);

// END CONTROLLERS //

const port = process.env.PORT || 8001;

app.listen(port, () => {
	console.log(`Fruitbowl-backend is running on port ${port}`);
});
