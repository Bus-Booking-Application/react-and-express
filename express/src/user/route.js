const express = require("express");
const router = express.Router();
const controller = require("./controller");


router
.route("/registeraccount")
.post(controller.register);
// .put()


module.exports = router;