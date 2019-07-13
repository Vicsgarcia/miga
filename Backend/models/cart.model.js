const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    
}, {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        },
    });

const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = Carrito;