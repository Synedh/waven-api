'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    element: {
        type: Schema.Types.ObjectId,
        ref: 'Element',
        default: null
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.export = mongoose.model('Resource', resourceSchema);
    