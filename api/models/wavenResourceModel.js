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
},
{
    toJSON: { 
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
});

resourceSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/resources/' + this.id;
});

module.export = mongoose.model('Resource', resourceSchema);
    