const express = require("express");
const router = express.Router();
const controller = require("./controller");


router
.route("/registeraccount")
.post(controller.register);

router
.route("/loginaccount")
.post(controller.login)



module.exports = router;