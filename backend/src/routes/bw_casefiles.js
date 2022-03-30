
const express = require('express');

const Bw_casefilesService = require('../services/bw_casefiles');
const Bw_casefilesDBApi = require('../db/api/bw_casefiles');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bw_casefiles:
 *        type: object
 *        properties:

 *          documentboxname:
 *            type: string
 *            default: documentboxname
 *          refno:
 *            type: string
 *            default: refno
 *          casefilename:
 *            type: string
 *            default: casefilename
 *          caseno:
 *            type: string
 *            default: caseno
 *          letterheading:
 *            type: string
 *            default: letterheading
 *          filedate:
 *            type: string
 *            default: filedate
 *          fileformat:
 *            type: string
 *            default: fileformat
 *          filefreetext:
 *            type: string
 *            default: filefreetext
 *          status:
 *            type: string
 *            default: status
 *          createby:
 *            type: string
 *            default: createby
 *          updateby:
 *            type: string
 *            default: updateby

 *          documentboxid:
 *            type: integer
 *            format: int64
 *          caseyear:
 *            type: integer
 *            format: int64
 *          fileseq:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Bw_casefiles
 *   description: The Bw_casefiles managing API
 */

  /**
  *  @swagger
  *  /api/bw_casefiles:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_casefiles]
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
  *                  $ref: "#/components/schemas/Bw_casefiles"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_casefiles"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await Bw_casefilesService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/bw_casefiles/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_casefiles]
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
  *                  $ref: "#/components/schemas/Bw_casefiles"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_casefiles"
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
  await Bw_casefilesService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/bw_casefiles/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_casefiles]
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
  *                $ref: "#/components/schemas/Bw_casefiles"
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
  await Bw_casefilesService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/bw_casefiles:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_casefiles]
  *      summary: Get all bw_casefiles
  *      description: Get all bw_casefiles
  *      responses:
  *        200:
  *          description: Bw_casefiles list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Bw_casefiles"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await Bw_casefilesDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await Bw_casefilesDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/bw_casefiles/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_casefiles]
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
  *                $ref: "#/components/schemas/Bw_casefiles"
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
  const payload = await Bw_casefilesDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
