const express = require("express");
const router = express.Router();

const travel = require("../travels/route");
const userRoute = require("../auth/route");


const route = [
    {
        route: travel,
        path: "/travel"
    },
    {
        route: userRoute,
        path: "/user"
    }
];


route.forEach((routes)=> {
    router.use(routes.path, routes.route)
});



module.exports = router;