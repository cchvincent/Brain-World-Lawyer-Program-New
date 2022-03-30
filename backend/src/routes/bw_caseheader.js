
const express = require('express');

const Bw_caseheaderService = require('../services/bw_caseheader');
const Bw_caseheaderDBApi = require('../db/api/bw_caseheader');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bw_caseheader:
 *        type: object
 *        properties:

 *          refno:
 *            type: string
 *            default: refno
 *          temprefno:
 *            type: string
 *            default: temprefno
 *          relatedcases:
 *            type: string
 *            default: relatedcases
 *          timebar:
 *            type: string
 *            default: timebar
 *          introducers:
 *            type: string
 *            default: introducers
 *          yearofcreation:
 *            type: string
 *            default: yearofcreation
 *          caseno:
 *            type: string
 *            default: caseno
 *          handlers:
 *            type: string
 *            default: handlers
 *          supervisors:
 *            type: string
 *            default: supervisors
 *          staffs:
 *            type: string
 *            default: staffs
 *          dla:
 *            type: string
 *            default: dla
 *          moneylaundrycompliance:
 *            type: string
 *            default: moneylaundrycompliance
 *          status:
 *            type: string
 *            default: status
 *          remarks:
 *            type: string
 *            default: remarks
 *          followuptasks:
 *            type: string
 *            default: followuptasks
 *          createby:
 *            type: string
 *            default: createby
 *          updateby:
 *            type: string
 *            default: updateby

 *          conflictcheck:
 *            type: integer
 *            format: int64
 *          clientcheck:
 *            type: integer
 *            format: int64
 *          caseprogress:
 *            type: integer
 *            format: int64
 *          workaccident:
 *            type: integer
 *            format: int64
 *          liabilityadmitted:
 *            type: integer
 *            format: int64
 *          approvalstatus:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Bw_caseheader
 *   description: The Bw_caseheader managing API
 */

  /**
  *  @swagger
  *  /api/bw_caseheader:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_caseheader]
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
  *                  $ref: "#/components/schemas/Bw_caseheader"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_caseheader"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await Bw_caseheaderService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/bw_caseheader/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_caseheader]
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
  *                  $ref: "#/components/schemas/Bw_caseheader"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Bw_caseheader"
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
  await Bw_caseheaderService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/bw_caseheader/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_caseheader]
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
  *                $ref: "#/components/schemas/Bw_caseheader"
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
  await Bw_caseheaderService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/bw_caseheader:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_caseheader]
  *      summary: Get all bw_caseheader
  *      description: Get all bw_caseheader
  *      responses:
  *        200:
  *          description: Bw_caseheader list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Bw_caseheader"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await Bw_caseheaderDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await Bw_caseheaderDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/bw_caseheader/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Bw_caseheader]
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
  *                $ref: "#/components/schemas/Bw_caseheader"
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
  const payload = await Bw_caseheaderDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
