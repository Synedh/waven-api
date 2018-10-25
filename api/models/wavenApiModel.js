'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the class'
    },
    icon: {
        type: String,
        required: 'Give the url of the icon'
    },
    image: {
        type: String,
        required: 'Give the url of the icon'
    },
    description: {
        type: String,
        required: 'Need a short description of the class'
    }
});

module.export = mongoose.mode('Tasks', ClassSchema);
