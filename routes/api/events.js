const router = require('express').Router();
const eventController = require("../../controllers/events.controller")


router.route("/")
    .get(eventController.findAll)
    .post(eventController.create);

// api/events/:id
router.route("/:id")

    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);


module.exports = router;