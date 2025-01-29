const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

const character = "qwertyuioplkjhgfdsazxcvbnm1234567890"
const tokengeneration = (data) => {
        return jwt.sign({ data }, character, { expiresIn: '2d' })
}

const verfytoken = async (req, res, next) => {
        try {
                const token = req.headers.authorization
                const withoutbearer = token.split(" ")[1]
                if (!withoutbearer) return res.status(404).json({ message: "token not found" })
                const payload = jwt.verify(withoutbearer, character)
                const checkUser = await user.findById(payload.data._id);
                if (!checkUser) return res.status(401).json({ message: "User Not Found " });
                req.user = checkUser;
                next();
        } catch (error) {
                res.json({ message: error.message })
        }
}
module.exports = { tokengeneration, verfytoken }