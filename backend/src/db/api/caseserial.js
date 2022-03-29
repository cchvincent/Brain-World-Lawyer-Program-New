
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CaseserialDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const caseserial = await db.caseserial.create(
  {
  id: data.id || undefined,

    serialcode: data.serialcode
    ||
    null
,

  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  return caseserial;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const caseserial = await db.caseserial.findByPk(id, {
      transaction,
    });

    await caseserial.update(
      {

        serialcode: data.serialcode
        ||
        null
,

        updatedById: currentUser.id,
      },
      {transaction},
    );

    return caseserial;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const caseserial = await db.caseserial.findByPk(id, options);

    await caseserial.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await caseserial.destroy({
      transaction
    });

    return caseserial;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const caseserial = await db.caseserial.findOne(
      { where },
      { transaction },
    );

    if (!caseserial) {
      return caseserial;
    }

    const output = caseserial.get({plain: true});

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    if (filter.page != 1 && filter.page) {
    const currentPage = +filter.page - 1;
    offset = currentPage * limit;
    }
    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [

    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.serialcode) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'caseserial',
            'serialcode',
            filter.serialcode,
          ),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active:
            filter.active === true ||
            filter.active === 'true',
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = await db.caseserial.findAndCountAll(
      {
        where,
        include,
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
        order: orderBy
          ? [orderBy.split('_')]
          : [['createdAt', 'DESC']],
        transaction,
      },
    );

//    rows = await this._fillWithRelationsAndFilesForRows(
//      rows,
//      options,
//    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike(
            'caseserial',
            'serialcode',
            query,
          ),
        ],
      };
    }

    const records = await db.caseserial.findAll({
      attributes: [ 'id', 'serialcode' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['serialcode', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.serialcode,
    }));
  }

};

