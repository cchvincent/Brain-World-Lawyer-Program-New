
const express = require('express');

const UsersrolesService = require('../services/usersroles');
const UsersrolesDBApi = require('../db/api/usersroles');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Usersroles:
 *        type: object
 *        properties:

 *          createby:
 *            type: string
 *            default: createby
 *          updateby:
 *            type: string
 *            default: updateby

 *          userid:
 *            type: integer
 *            format: int64
 *          roleid:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Usersroles
 *   description: The Usersroles managing API
 */

  /**
  *  @swagger
  *  /api/usersroles:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Usersroles]
  *      summary: Add new item
  *      description: Add new item
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              properties:
  *                data:
  *                  description: Data of the updated item
  *                  type: object
  *                  $ref: "#/components/schemas/Usersroles"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Usersroles"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await UsersrolesService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/usersroles/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Usersroles]
  *      summary: Update the data of the selected item
  *      description: Update the data of the selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: Item ID to update
  *          required: true
  *          schema:
  *            type: string
  *      requestBody:
  *        description: Set new item data
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              properties:
  *                id:
  *                  description: ID of the updated item
  *                  type: string
  *                data:
  *                  description: Data of the updated item
  *                  type: object
  *                  $ref: "#/components/schemas/Usersroles"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Usersroles"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.put('/:id', wrapAsync(async (req, res) => {
  await UsersrolesService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/usersroles/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Usersroles]
  *      summary: Delete the selected item
  *      description: Delete the selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: Item ID to delete
  *          required: true
  *          schema:
  *            type: string
  *      responses:
  *        200:
  *          description: The item was successfully deleted
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Usersroles"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.delete('/:id', wrapAsync(async (req, res) => {
  await UsersrolesService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/usersroles:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Usersroles]
  *      summary: Get all usersroles
  *      description: Get all usersroles
  *      responses:
  *        200:
  *          description: Usersroles list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Usersroles"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await UsersrolesDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await UsersrolesDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/usersroles/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Usersroles]
  *      summary: Get selected item
  *      description: Get selected item
  *      parameters:
  *        - in: path
  *          name: id
  *          description: ID of item to get
  *          required: true
  *          schema:
  *            type: string
  *      responses:
  *        200:
  *          description: Selected item successfully received
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Usersroles"
  *        400:
  *          description: Invalid ID supplied
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Item not found
  *        500:
  *          description: Some server error
  */

router.get('/:id', wrapAsync(async (req, res) => {
  const payload = await UsersrolesDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
