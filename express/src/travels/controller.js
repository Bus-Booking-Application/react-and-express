const travel = require("../travels/model");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const auth = require("../auth/model");



const createTravel = async (req, res) => {
    try {

        let checkmail = await travel.findOne({ email: req.body.email });
        if (checkmail) return res.json({ message: "email already exis:t" });
        const [hashedPassword, generateId] = await Promise.all([
            bcrypt.hash(req.body.password, 10),
            v4()
        ]);
        let data = {
            ...req.body,
            _id: generateId,
            role: "travel",
            password: hashedPassword
        };

        let authData = {
            name: req.body.CompanyName,
            email: req.body.email,
            role: req.body.role,
            password: hashedPassword,
            userId: generateId,
            role: "travel"
        }
        let [create_data] = await Promise.all([
            travel.create(data),
            auth.create(authData)
        ])

        res.json(create_data)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}
const getdata = async (req, res) => {
    try {
        let data = req.body
        let [checkmail, check_password] = await Promise.all([
            auth.findOne({ email: data.email }),
            bcrypt.compare(data.password, checkmail.password)
        ])
        if (!checkmail) return res.status(404).json({ messange: "data not found" })
        if (!check_password) return res.status(401).json({ message: "wrong password" })
        res.json(checkmail)
    } catch (error) {
        res.json({ message: error.message })
    }
}
const edit = async (req, res) => {
    try {
        let { email } = req.query
        let new_data = req.body
        let checkmail = await travel.findOne({ email })
        if (!checkmail) return res.status(404).json({ message: "data not found" });
        let new_table = await travel.findOneAndUpdate({ email }, { $set: new_data }, { new: true })
        res.json(new_table)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteaccount = async (req, res) => {
    try {
        let { email } = req.query;
        let checkmail = await travel.findOne({ email })
        if (!checkmail) return res.status(404).json({ message: "data not found" })
        let [deleteDocument_travel,deleteDocument_auth] = await Promise.all([
            travel.findOneAndDelete(email),
            auth.findOneAndDelete(email)])
        res.json("data deleted successfully.....")
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports = { createTravel, getdata, edit, deleteaccount }