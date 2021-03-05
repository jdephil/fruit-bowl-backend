const Tip = require('../models/tip');
const seedData = require('./tip-seeds.json');

Tip.deleteMany({})
	.then(() => {
		return Tip.insertMany(seedData);
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
