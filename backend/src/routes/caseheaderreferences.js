
const express = require('express');

const CaseheaderreferencesService = require('../services/caseheaderreferences');
const CaseheaderreferencesDBApi = require('../db/api/caseheaderreferences');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Caseheaderreferences:
 *        type: object
 *        properties:

 *          refno:
 *            type: string
 *            default: refno
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
 *          temprefno:
 *            type: string
 *            default: temprefno
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

 *          caseprogressid:
 *            type: integer
 *            format: int64
 *          clientid:
 *            type: integer
 *            format: int64
 *          casefilelocationid:
 *            type: integer
 *            format: int64
 *          casetypesid:
 *            type: integer
 *            format: int64
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
 *   name: Caseheaderreferences
 *   description: The Caseheaderreferences managing API
 */

  /**
  *  @swagger
  *  /api/caseheaderreferences:
  *    post:
  *      security:
  *        - bearerAuth: []
  *      tags: [Caseheaderreferences]
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
  *                  $ref: "#/components/schemas/Caseheaderreferences"
  *      responses:
  *        200:
  *          description: The item was successfully added
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Caseheaderreferences"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        405:
  *          description: Invalid input data
  *        500:
  *          description: Some server error
  */

router.post('/', async (req, res) => {
    await CaseheaderreferencesService.create(req.body.data, req.currentUser, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
});

  /**
  *  @swagger
  *  /api/caseheaderreferences/{id}:
  *    put:
  *      security:
  *        - bearerAuth: []
  *      tags: [Caseheaderreferences]
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
  *                  $ref: "#/components/schemas/Caseheaderreferences"
  *              required:
  *                - id
  *      responses:
  *        200:
  *          description: The item data was successfully updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/components/schemas/Caseheaderreferences"
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
  await CaseheaderreferencesService.update(req.body.data, req.body.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  * @swagger
  *  /api/caseheaderreferences/{id}:
  *    delete:
  *      security:
  *        - bearerAuth: []
  *      tags: [Caseheaderreferences]
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
  *                $ref: "#/components/schemas/Caseheaderreferences"
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
  await CaseheaderreferencesService.remove(req.params.id, req.currentUser);
  const payload = true;
  res.status(200).send(payload);
}));

  /**
  *  @swagger
  *  /api/caseheaderreferences:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Caseheaderreferences]
  *      summary: Get all caseheaderreferences
  *      description: Get all caseheaderreferences
  *      responses:
  *        200:
  *          description: Caseheaderreferences list successfully received
  *          content:
  *            application/json:
  *              schema:
  *                type: array
  *                items:
  *                  $ref: "#/components/schemas/Caseheaderreferences"
  *        401:
  *          $ref: "#/components/responses/UnauthorizedError"
  *        404:
  *          description: Data not found
  *        500:
  *          description: Some server error
  */

router.get('/', wrapAsync(async (req, res) => {
  const payload = await CaseheaderreferencesDBApi.findAll(
    req.query,
  );

  res.status(200).send(payload);
}));

router.get('/autocomplete', async (req, res) => {
  const payload = await CaseheaderreferencesDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

  /**
  * @swagger
  *  /api/caseheaderreferences/{id}:
  *    get:
  *      security:
  *        - bearerAuth: []
  *      tags: [Caseheaderreferences]
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
  *                $ref: "#/components/schemas/Caseheaderreferences"
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
  const payload = await CaseheaderreferencesDBApi.findBy(
    { id: req.params.id },
  );

  res.status(200).send(payload);
}));

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
