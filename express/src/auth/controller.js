const bcrypt = require("bcrypt");
const user = require("./model");
const password = require("../utils/user");
const {sendmail}=require("../middleware/user")
const {tokengeneration} = require("../middleware/user");


//Register user and send email to user with password  
const register = async (req, res) => {
    try {

        const checkEmail = await user.findOne({ email: req.body.email });
        if (checkEmail) return res.status(409).json({ message: "Email already exists" });
        const Password = password(8);
        const hashedPassword = await bcrypt.hash(Password, 10);
        const data = { ...req.body, password: hashedPassword };

        const createUser = await user.create(data);
        await sendmail(req.body.email, Password, req.body.name);
        res.json(createUser);
    }

    catch (error) {
        res.status(500).json({ Error: error.message });
    }
};

//Login user and generate token for user 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkEmail = await user.findOne({ email });
        console.log(checkEmail);

        if (!checkEmail) return res.status(409).json({ message: "Email not Registered.." });
        const checkPassword = await bcrypt.compare(password, checkEmail.password);
        if (!checkPassword) return res.status(409).json({ message: "Invalid Password" });
        const token = tokengeneration(checkEmail);
        res.json({
            token: token,
            message: "Login successful"
        });
    } catch (error) {
        console.log(error);

        res.json({ Error: error.message });
    }
}


module.exports = { login, register }
