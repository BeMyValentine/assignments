var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var foodSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    calories: Number

});

module.exports = mongoose.model("recipe", foodSchema);