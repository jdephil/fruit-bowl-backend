const mongoose = require('../db/connection')

const TipSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }, 
        category: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }, 
        urlTitle: String
    }
)

const Tip = mongoose.model('Tip', TipSchema)

module.exports = Tip