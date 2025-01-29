const express=require("express")
const router=express.Router()
const controller=require("../user/controller")
const {verfytoken}=require("../middleware/token")

router.use(verfytoken)

router
.route("/")
.post(controller.postting)
.get(controller.getting)
.put(controller.update)
.delete(controller.deleting)

module.exports=router


