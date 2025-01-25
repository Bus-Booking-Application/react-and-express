const User = require('./model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const generator = require('generate-password');
const { response } = require('express');    




//Register user and send email to user with password  
const registerUser = async (req, res) => {
    try {
        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail) {
            return res.status(400).json({ message: "Email already exist" });
        }
        const password = generator.generate({
            length: 8,
            numbers: true
        });

        const hashedPassword = await bcrypt.hash(password, 10);
        const data = {...req.body, password: hashedPassword };
        const user = new User(data);
        await user.save();
       
        const createUser = await User.create(data);
        await createUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login user


    module.exports = { registerUser, };
