const express = require('express');
const router = express.Router();

const Tip = require('../models/tip');

router.get('/', (req, res, next) => {
	Tip.findAll()
		.then((tips) => res.json(tips))
		.catch(next);
});

// This GET call below with the ID is what we want for our random tips //

router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Tip.findById(id)
		.then((tip) => res.json(tip))
		.catch(next);
});


// POST, PATCH, DELETE are just in case we want them down the road //

router.post('/', (req, res, next) => {
	const tipData = req.body;
	Tip.create(tipData)
		.then((tip) => res.status(201).json(tip))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const tipData = req.body;
	Tip.findByIdAndUpdate(id, tipData, { new: true })
		.then((tip) => res.json(tip))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Tip.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
