const express=require("express")
const router=express.Router()
const controller=require("../bus_offer/controller")

router
.route("/bus_offer_registration")
.post(controller.register)

