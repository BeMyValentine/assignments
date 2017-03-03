var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    carsOwned: [{
        type: Schema.Types.ObjectId,
        ref: "Car"
    }]
});

module.exports = mongoose.model("Person", personSchema);