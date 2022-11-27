const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username}) //since usernames must be unique, findOne will get the given username
        !user && res.status(400).json("Wrong credentials!"); // if user is not found, return error

        const validate = await bcrypt.compare(req.body.password, user.password); //decrypt password and compare to user.password
        !validate && res.status(400).json("Wrong credentials!"); // if password is not valid, return error

        const {password, ...others} = user._doc; //remove password from user object
        res.status(200).json(others); // if user is found and password is valid, return user
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;