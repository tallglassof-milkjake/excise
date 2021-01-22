const router = require("express").Router();
const exciseController = require("../../controllers/exciseController");

// Matches with "/api/excise"
router
  .route("/")
  .get(exciseController.findAll)
  .post(exciseController.create);

// Matches with "/api/excise/:id"
router
  .route("/:id")
  .get(exciseController.findById)
  .put(exciseController.update)
  .delete(exciseController.remove);

module.exports = router;
