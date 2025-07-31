const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {    
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

const Note = mongoose.model('Note', Schema);
module.exports = Note;

