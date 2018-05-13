// require('../config/mongoose');
const mongoose = require('mongoose');
require('./comment.js');

module.exports = (() => {
    const RateSchema = new mongoose.Schema({
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true,
            min: [5, "Comment must be longer than 5 characters"]
        }
        
    }, { timestamps: true });
    mongoose.model('Rate', RateSchema);
    
    const LatteSchema = new mongoose.Schema({
        imgUrl: {
            type: String,
            required: true,
        },
        creator: {
            type: String,
            required: true,
            min: [3, 'Name must be more than 3 characters'],
        },
        ratings: [RateSchema]
    }, { timestamps: true });
    
    mongoose.model('Latte', LatteSchema);
    // const Latte = mongoose.model('Latte');
})();


