

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;


var Issue = new Schema ({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Issue", Issue);