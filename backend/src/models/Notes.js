const mongoose = require("mongoose");
const validator = require("validator");


const notesSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        minlength: 2,
    },
    description: {
        required: true,
        type: String,
        minlength: 2,
    },
    tag: {
        // required: true,
        type: String,
        minlength: 2,
        default: "general",
    },
    user: {
        // This is a way to defines the foreign keys in the Mongo DB Schemas 

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now,
    }
});


// We will creates new Modelss   
const Note = new mongoose.model("Note", notesSchema);

module.exports = Note;