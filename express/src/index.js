const express = require("express")
const connection = require("./config/connection")
const route = require("./route/routeIndex")

const app = express();
connection();

app.use(express.json())
app.use("/v1", route)


const port = 7000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);

})

