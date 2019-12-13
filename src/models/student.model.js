const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: 'female'
    },
    email: {
        type: String,
        required: true
    },
    branch: {
        type: mongoose.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: true
    }

});

module.exports = mongoose.model('Student', StudentSchema);