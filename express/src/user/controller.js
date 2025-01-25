const bcrypt = require("bcrypt");
const user = require("./register_model");
const { password } = require("../utils/user");
const nodemailer = require("nodemailer");


//Register user and send email to user with password  
const register = async (req, res) => {
    try {
        
        const checkEmail = await user.findOne({ email:  req.body.email });
        if (checkEmail) return res.status(409).json({ message: "Email already exists" });
        const password = passwordGen(8);

        const hashedPassword = await bcrypt.hash(password, 10);
        const data = {...req.body, password: hashedPassword};

        const createUser = await user.create(data);
        await sendMailtoUser(req.body.email, password,req.body.userName);
        res.json(createUser);
    }

    catch (error) {
        res.status(500).json({ Error: error.message });
    }   
    };

//Login user

module.exports={register};