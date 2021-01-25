const router = require("express").Router();
const exciseRoutes = require("./excise");

router.use("/excise", exciseRoutes,);

module.exports = router;
