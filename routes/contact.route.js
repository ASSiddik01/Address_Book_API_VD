const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contact.controller");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/bulk-update")
  /**
   * @api {post} /bulk-update
   * @apiDescription Create bulk contact
   * @apiPermission Authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} saved bulk contacts.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only authorized user can access the data
   */
  .post(verifyToken, contactControllers.saveBulkData);

router
  .route("/")
  /**
   * @api {get} /
   * @apiDescription Create bulk contact
   * @apiPermission All user
   *
   * @apiParam  {Number{1-}}      [page=1]     List page
   * @apiParam  {Number{1-}}      [limit=2]    Users per page
   * @apiParam  {String}          [sort=name]  Users sorting
   * @apiParam  {String}          [fidlds=name,phone,....]  Users property slection
   *
   * @apiSuccess {Object[]} get all contacts.
   */
  .get(contactControllers.getData)
  /**
   * @api {post} /
   * @apiDescription Create a contact
   * @apiPermission Authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} saved a contact.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only authorized user can access the data
   */
  .post(verifyToken, contactControllers.saveData);

router
  .route("/:id")
  /**
   * @api {get} /:id
   * @apiDescription Get contact by id parameter
   * @apiPermission Authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} Get a contact.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only authorized user can access the data
   */
  .get(verifyToken, contactControllers.getDataById)
  /**
   * @api {patch} /:id
   * @apiDescription Updata contact by id parameter
   * @apiPermission Authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} update a contact.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only authorized user can access the data
   */
  .patch(verifyToken, contactControllers.updateData)
  /**
   * @api {delete} /:id
   * @apiDescription Delete contact by id parameter
   * @apiPermission Authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} delete a contact.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only authorized user can access the data
   */
  .delete(verifyToken, contactControllers.deleteData);

module.exports = router;
