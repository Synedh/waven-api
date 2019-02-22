'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    element: {
        type: Schema.Types.ObjectId,
        ref: 'Element'
    },
    quantity: {
        type: Number
    }
});

resourceSchema.pre('find', function(next) {
    this.populate({
        path: 'element',
        model: 'Element'
    });
    next();
});

module.export = mongoose.model('Resource', resourceSchema);
    