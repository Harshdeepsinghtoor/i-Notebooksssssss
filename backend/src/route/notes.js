const express = require("express");
const fetchUsers = require("../Middleware/fetchUser");
const router = new express.Router;
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

router.get("/", fetchUsers, async (req, res) => {
    try {
        const users = await Note.find({ user: req.user._id });
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ error });

    }

});

router.post("/", fetchUsers, [
    body("title", "enter a valid Titless").isLength({ min: 3 }),
    body("description", "Enter Valid Descriptionsss").isLength({ min: 5 }),
], async (req, res) => {
    const { title, description, tag, } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send(errors);
    }
    try {
        const note = new Note({
            title, description, tag, user: req.user._id,
        });

        const savedNotes = await note.save();
        res.status(201).json(savedNotes);

    } catch (error) {
        res.status(400).send("Hello");
    }
});

router.put("/:id", fetchUsers, async (req, res) => {
    try {
        const { title, description, tag, } = req.body;

        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        const noteToUpdate = await Note.findById(req.params.id);
        if (!noteToUpdate) {
            return res.status(404).send("Nooss");
        }
        if (noteToUpdate.user.toString() !== req.user._id) {
            return res.status(401).send("Noo");
        }

        // The New Truee will gives the new updated results otherwises the results will be of old Row returns    
        const updateNotes = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.send(updateNotes);
    } catch (error) {
        res.status(400).send("Internal Server Error");
    }
});

router.delete("/:id", fetchUsers, async (req, res) => {
    try {
        const noteToDeletes = await Note.findById(req.params.id);
        if (!noteToDeletes) {
            res.status(404).send("No Found");
        }
        if (noteToDeletes.user.toString() === req.user._id) {
            const notes = await Note.findByIdAndDelete(req.params.id);
            res.status(200).send({ success: true, note: notes });
        } else {
            res.status(401).send("Yesssssssssssssssssssss");
        }


    } catch (error) {
        res.status(400).send("Internal Server Error");
    }

});

module.exports = router;