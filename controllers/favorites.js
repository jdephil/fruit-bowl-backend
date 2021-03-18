const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection')

const Tip = require('../models/tip');

router.post('/', (req, res, next) => {
	// let faveQuery = []
	// forEach(favorite in req.body.favorites) {
	// 	let mongoId = mongoose.Types.ObjectId(favorite)
	// }
		Tip.find({
    '_id': { $in: [
        mongoose.Types.ObjectId('6052266e2dfbfdc5e4eaeff0'),
        mongoose.Types.ObjectId('6052266e2dfbfdc5e4eaefef') 
    ]}
	}).then((tip) => res.status(201).json(tip))
	.catch(next);
});

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Tip.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
