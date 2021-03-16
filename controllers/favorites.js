const express = require('express');
const router = express.Router();

const Tip = require('../models/tip');

router.post('/', (req, res, next) => {
	const tipData = req.body;
	Tip.findById(tipData._id)
		.then((tip) => res.status(201).json(tip))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Tip.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
