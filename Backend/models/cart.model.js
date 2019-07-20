const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    amounts: [{
        type: Number,
      }],
    status: {
        type: String,
        enum: ["pendiente", "completado", "en proceso"],
        default: "pendiente"
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