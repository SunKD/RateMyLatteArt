const mongoose = require('mongoose');
require('../models/latte.js');
module.exports = () => {
    var Latte = mongoose.model('Latte'); // 
    var Comment = mongoose.model('Rate'); //require('../models/comment.js');
    return { 
        readAll: (req, res) =>{
            Latte.find({}, function(err, lattes){
                console.log(err, lattes)
                if(err){
                    console.log(err);
                    res.json(err);
                }else{
                    res.json(lattes);
                }
            })
        },

        create: (req, res) => {
            let newLatte = new Latte({
                imgUrl: req.body.imgUrl,
                creator: req.body.creator
            })

            newLatte.save(function(err){
                if(err){
                    console.log('Something When wrong in save' + err);
                    res.json(err);
                }else{
                    console.log('Successfully saved task');
                    res.json({message: "Success"});
                }
            })
        },

        createComment: (req, res) =>{
            let newComment = new Comment({
                rating: req.body.rating,
                comment: req.body.comment
            })
            // newComment.save(function(err){
            //     if(err){
            //         res.json(err);
            //     }else{
            //         console.log('Successfully saved task');
            //         res.json({message: "Success"});
            //     }
            // })
            Latte.findOne({_id: req.params.id}, function(err, latte){
                latte.ratings.push(newComment);
                
                if(err){
                    res.json(err);
                }else{
                    latte.save((err2, lt2) => {
                        if (!err2) {
                            res.json({message: "Success", data: lt2});
                        }
                    })
                    console.log("'Successfully added the Comment to Latte");
                    
                }
            })
            
        },

        readOne: (req, res) => {
            Latte.findOne({_id: req.params.id}, function(err, data){
                if(err){
                    res.json(err);
                }
                res.json(data);
            })
        }
    }
}