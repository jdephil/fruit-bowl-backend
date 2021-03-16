const mongoose = require('mongoose');

const mongoURI =
	process.env.NODE_ENV === 'production'
		? 'mongodb+srv://fruitbowl:jfTDldM9JoKZucZf@cluster0.0zn9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
		: 'mongodb://localhost/fruitbowl-backend';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch(console.error);

module.exports = mongoose;
