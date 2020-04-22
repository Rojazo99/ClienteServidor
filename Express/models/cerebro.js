var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        enum: ["Chicle", "Galleta Oreo", "Melón","Limon","Pera","Fresa"]
    },
    description: {
        type: String,
        required: true,
        minlength: [6, "La descripcion es muy corta: min 6 caracteres"],
        maxlength: [40, "La descripcion es muy larga: max 40 caracteres"]
    },
    iq: {
        type: Number,
        required: true,
        min: [1, 'El iq minimo es 1']
    },
    picture: {
        type: String,
        required: true
    },
    user:{
        type: String
    }
});

var Cerebro = mongoose.model("Cerebro", modelSchema);
module.exports = Cerebro;