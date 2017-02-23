var mongoose = require("mongoose");

var targetSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isLiving: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    team: {
        type: Boolean,
        required: true
    }
});


var Target = mongoose.model("Target", targetSchema);

module.exports = Target;