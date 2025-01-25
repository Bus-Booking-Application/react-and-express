const express = require("express");
const router = express.Router();
const login=require("./controller")


router
.route("/loginaccount")
.post(login)


module.exports = router;