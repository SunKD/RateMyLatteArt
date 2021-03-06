const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

module.exports = () => {
    mongoose.connect('mongodb://localhost/rLatte');
    mongoose.Promise = global.Promise;
    var models_path = path.join(__dirname, './../models');
    fs.readdirSync(models_path).forEach(function(file){
        if(file.indexOf('/.js')>=0){
            require(models_path + '/' + file);
        }
    })
};