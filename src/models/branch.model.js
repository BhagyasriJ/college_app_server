const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BranchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Branch', BranchSchema);