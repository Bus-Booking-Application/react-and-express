const express = require("express")
const router = express.Router()
const controller = require("../travels/controller")
const {verfytoken}=require("../middleware/token")

router.use(verfytoken)

router
    .route("/")
    .post(controller.createTravel)
    .get(controller.getdata)
    .put(controller.edit)
    .delete(controller.deleteaccount)


module.exports = router;