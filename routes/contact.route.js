const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contact.controller");

router
  .route("/bulk-update")
  /**
   * @api {patch} /bulk-update
   * @apiDescription Update multiple data from body query
   * @apiPermission all
   */
  .patch(contactControllers.updateMultipleData);

router
  .route("/bulk-delete")
  /**
   * @api {delete} /bulk-delete
   * @apiDescription Delete multiple data from body query
   * @apiPermission all
   */
  .delete(contactControllers.deleteMultipleData);

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
  .post(contactControllers.saveData);

router
  .route("/:id")
  /**
   * @api {patch} /:id
   * @apiDescription Updata data by id parameter
   * @apiPermission all
   */
  .patch(contactControllers.updateData)
  /**
   * @api {delete} /:id
   * @apiDescription Delete data by id parameter
   * @apiPermission all
   */
  .delete(contactControllers.deleteData);

module.exports = router;
