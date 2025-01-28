const travel = require("../travels/model");
const Auth = require("../auth/model");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");


const createTravel = async (req, res) => {
    try {
        let data = req.body;
        let checkmail = await travel.findOne({ email: req.body.email });
        if (checkmail) return res.json({ message: "email already exis:t" });
        const [hashedPassword, generateId] = await Promise.all([
            bcrypt.hash(data.password, 10),
            v4()
        ]);
        data = {
            ...data,
            _id: generateId,
            role: "travel",
            Password: hashedPassword
        };

        let authData = {
            name: data.CompanyName,
            email: data.email,
            role: data.role,
            Password: hashedPassword,
            userId: generateId,
            role: "travel",

        };
        let [create_data] = await Promise.all([
            travel.create(data),
            Auth.create(authData)
        ]);
        res.json(create_data)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}
const getdata = () => {

}
const edit = () => {

}
const deleteaccount = () => {

}
module.exports = { createTravel, getdata, edit, deleteaccount }