const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
        unique: true,
    },
    shortDescription: {
        type: String,
        required: 'Description is required',
        minlength: 6,
        maxlength:40
    },
    longDescription: {
        type: String,
        required: 'Description is required',
        minlength: 6,
        maxlength:240
    },
    photo: {
        type: String,
        required: 'Photo is required',
    },
    price: {
        type: Number,
        required: 'Price is required',
    },
    

}, {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
                return ret;
            }
        }
    })


const product = mongoose.model('Product', productSchema);
module.exports = product;