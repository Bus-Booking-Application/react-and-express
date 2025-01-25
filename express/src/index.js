const express=require("express")
const app=express()
const connection=require("./config/connection")
const route=require("./route/routeIndex")
app.use(express.json())
connection()

app.use("/route",route)


const port=7000
app.listen(port)

