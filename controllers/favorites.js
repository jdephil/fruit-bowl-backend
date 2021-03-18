const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection')

const Tip = require('../models/tip');

router.post('/', (req, res, next) => {
	// console.log("tip",Tip)
	// let faveQuery = []
	// for (let i = 0; i < req.body.length; i++) {
	// 	console.log(req.body[i])
	// 	console.log("to string", req.body[i].toString())
		// let mongoId = mongoose.Types.ObjectId(req.body[i])
		// faveQuery.push(mongoId)
		// let faveTip = await Tip.find({
		//  '_id': { $in: [
		// 		// mongoose.Types.ObjectId(req.body[i].toString())
		// 		mongoose.Types.ObjectId('60464ee6b1ee8600040797e9')
		//  ]} 
		// }		
		// 		// '60464ee6b1ee8600040797e9'
		// )

	// 	let faveTip = await Tip.find({
	// 		'_id': { $in: [
	// 				mongoose.Types.ObjectId('60464ee6b1ee8600040797df')
					
	// 		]}
	// });
	// 	console.log("faveTip", faveTip)
	// 	faveQuery.push(faveTip)
	// }
	// console.log("faveQuery", faveQuery)

	// console.log("favequery", faveQuery)
	//console.log(req.body)
	// for (var fave in req.body) {
		// 	console.log(fave)
		// 	// console.log(mongoose.Types.ObjectId(`${fave}`))
		// 	// let mongoId = mongoose.Types.ObjectId(`${fave}`)
		// 	// faveQuery.push(mongoId)
		// }
		// console.log(faveQuery)
		// .then((tip) => 
		Tip.find({
			'_id': { $in: [
					mongoose.Types.ObjectId('60464ee6b1ee8600040797f1'),
					mongoose.Types.ObjectId('660464ee6b1ee8600040797db') 
				]}
			})
			.then((tip) => 
			res.status(201).json(tip)
			)
				.catch(next);
	

});

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Tip.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
