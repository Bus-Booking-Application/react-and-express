const express=require("express")
const app=express()
const connection=require("./config/connection")
const route=require("./route/routeIndex")
app.use(express.json())
connection()
const port=7000
app.use("/route",route)
app.listen(port)

