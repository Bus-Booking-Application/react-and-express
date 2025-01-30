const bcrypt = require("bcrypt");
const Auth = require("./model");
const {tokengeneration} = require("../middleware/token");



//Login user and generate token for user 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkEmail = await Auth.findOne({ email });
        if (!checkEmail) return res.status(409).json({ message: "Email not Registered.." });
        const checkPassword = await bcrypt.compare(password, checkEmail.password);
        if (!checkPassword) return res.status(409).json({ message: "Invalid Password" });
        const token = tokengeneration(checkEmail);
        res.json({
            token: token,
            message: "Login successful"
        });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
}


module.exports = { login }
