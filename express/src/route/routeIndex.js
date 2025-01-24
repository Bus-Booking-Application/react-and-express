const express = require("express");
const router = express.Router();

const adminRoute = require("../admin/route");
const userRoute = require("../user/route");


const route = [
    {
        route: adminRoute,
        path: "/admin"
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