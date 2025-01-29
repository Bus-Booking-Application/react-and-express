const express = require("express");
const router = express.Router();

const travel = require("../travels/route");
const auth = require("../auth/route");
const user=require("../user/route")


const route = [
    {
        route: travel,
        path: "/travel"
    },
    {
        route: auth,
        path: "/auth"
    },
    {
        route:user,
        path:"/user"
    }
];


route.forEach((routes)=> {
    router.use(routes.path, routes.route)
});



module.exports = router;