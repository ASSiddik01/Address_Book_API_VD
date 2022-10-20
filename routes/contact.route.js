const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contact.controller");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/bulk-update")
  /**
   * @api {post} /bulk-delete
   * @apiDescription Sava data
   * @apiPermission all
   */
  .post(verifyToken, contactControllers.saveBulkData);

router
  .route("/")
  /**
   * @api {get} /
   * @apiDescription Get all data
   * @apiPermission all
   */
  .get(contactControllers.getData)
  /**
   * @api {post} /bulk-delete
   * @apiDescription Sava data
   * @apiPermission all
   */
  .post(verifyToken, contactControllers.saveData);

router
  .route("/:id")
  /**
   * @api {patch} /:id
   * @apiDescription Get data by id parameter
   * @apiPermission all
   */
  .get(verifyToken, contactControllers.getDataById)
  /**
   * @api {patch} /:id
   * @apiDescription Updata data by id parameter
   * @apiPermission all
   */
  .patch(verifyToken, contactControllers.updateData)
  /**
   * @api {delete} /:id
   * @apiDescription Delete data by id parameter
   * @apiPermission all
   */
  .delete(verifyToken, contactControllers.deleteData);

module.exports = router;
