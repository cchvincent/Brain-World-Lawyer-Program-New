
const express = require('express');

const IntroducersService = require('../services/introducers');
const IntroducersDBApi = require('../db/api/introducers');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Introducers:
 *        type: object
 *        properties:

 *          name_en:
 *            type: string
 *            default: name_en
 *          name_ch:
 *            type: string
 *            default: name_ch
 *          initial:
 *            type: string
 *            default: initial
 *          status:
 *            type: string
 *            default: status
 *          createby:
 *            type: string
 *            default: createby
 *          updateby:
 *            type: string
 *            default: updateby

 */

/**
 *  @swagger
 * tags:
 *   name: Introducers
 *   description: The Introducers managing API
 */

  /**
  *  @swagger
  *  /api/introducers:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Introducers]
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
  *                  $ref: "#/components/schemas/Introducers"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Introducers"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await IntroducersService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/introducers/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Introducers]
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
  *                  $ref: "#/components/schemas/Introducers"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Introducers"
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
  await IntroducersService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/introducers/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Introducers]
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
  *                $ref: "#/components/schemas/Introducers"
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
  await IntroducersService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/introducers:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Introducers]
  *      summary: Get all introducers
  *      description: Get all introducers
  *      responses:
  *        200:
  *          description: Introducers list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Introducers"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await IntroducersDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await IntroducersDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/introducers/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Introducers]
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
  *                $ref: "#/components/schemas/Introducers"
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
  const payload = await IntroducersDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
