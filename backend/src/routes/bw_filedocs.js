
const express = require('express');

const Bw_filedocsService = require('../services/bw_filedocs');
const Bw_filedocsDBApi = require('../db/api/bw_filedocs');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bw_filedocs:
 *        type: object
 *        properties:

 *          refno:
 *            type: string
 *            default: refno
 *          docboxname:
 *            type: string
 *            default: docboxname
 *          folderpath:
 *            type: string
 *            default: folderpath
 *          filename:
 *            type: string
 *            default: filename
 *          status:
 *            type: string
 *            default: status
 *          createby:
 *            type: string
 *            default: createby
 *          updateby:
 *            type: string
 *            default: updateby

 *          parentid:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Bw_filedocs
 *   description: The Bw_filedocs managing API
 */

  /**
  *  @swagger
  *  /api/bw_filedocs:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_filedocs]
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
  *                  $ref: "#/components/schemas/Bw_filedocs"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_filedocs"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await Bw_filedocsService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/bw_filedocs/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_filedocs]
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
  *                  $ref: "#/components/schemas/Bw_filedocs"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_filedocs"
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
  await Bw_filedocsService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/bw_filedocs/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_filedocs]
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
  *                $ref: "#/components/schemas/Bw_filedocs"
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
  await Bw_filedocsService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/bw_filedocs:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_filedocs]
  *      summary: Get all bw_filedocs
  *      description: Get all bw_filedocs
  *      responses:
  *        200:
  *          description: Bw_filedocs list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Bw_filedocs"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await Bw_filedocsDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await Bw_filedocsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/bw_filedocs/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_filedocs]
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
  *                $ref: "#/components/schemas/Bw_filedocs"
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
  const payload = await Bw_filedocsDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
