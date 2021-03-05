const mongoose = require('./connection');

const Tip = require('../models/tip');
const seedData = require('./tip-seeds.json');

// Tip.deleteMany({})
// .then(() => {

Tip.insertMany(seedData)
	.then(console.log())
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
