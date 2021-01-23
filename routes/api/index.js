const router = require("express").Router();
const exciseRoutes = require("./excise");

router.use("/", exciseRoutes);

module.exports = router;
