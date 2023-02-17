const express = require("express");
var bcrypt = require('bcryptjs');
const router = new express.Router;
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchUsers = require("../Middleware/fetchUser");

router.get("/", async (req, res) => {
    const users = await User.find({});
    res.status(200).send(users);
});

// Creates the Users    
router.post("/", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const reqBody = req.body;
        reqBody.password = secPass;
        const user = new User(reqBody);
        const createdUsers = await user.save();
        res.status(201).send(createdUsers);
    } catch (error) {

        res.status(400).send(error);
    }
});

router.post("/login", [
    body("email", "enter a valid email").isEmail(),
    body("password", "password can not be blank").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send(errors);
    }
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ errors: "Please enter correct credentials" });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(400).json({ errors: "Please enter correct credentials" });
        }

        const data = {
            user: {
                _id: user.id,
            }
        };

        const authToken = jwt.sign(data, "shh");

        res.json({ authToken });

    } catch (error) {
        res.send(error);
    }
});

router.post("/getUsers", fetchUsers, async (req, res) => {
    try {
        let userId = req.user._id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {

        res.status(400).send(error);
    }
});

module.exports = router;