
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Bw_progressDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const bw_progress = await db.bw_progress.create(
  {
  id: data.id || undefined,

    desc_en: data.desc_en
    ||
    null
,

    desc_ch: data.desc_ch
    ||
    null
,

    progresstypes: data.progresstypes
    ||
    null
,

    status: data.status
    ||
    null
,

    createdate: data.createdate
    ||
    null
,

    createby: data.createby
    ||
    null
,

    updatedate: data.updatedate
    ||
    null
,

    updateby: data.updateby
    ||
    null
,

  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  return bw_progress;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_progress = await db.bw_progress.findByPk(id, {
      transaction,
    });

    await bw_progress.update(
      {

        desc_en: data.desc_en
        ||
        null
,

        desc_ch: data.desc_ch
        ||
        null
,

        progresstypes: data.progresstypes
        ||
        null
,

        status: data.status
        ||
        null
,

        createdate: data.createdate
        ||
        null
,

        createby: data.createby
        ||
        null
,

        updatedate: data.updatedate
        ||
        null
,

        updateby: data.updateby
        ||
        null
,

        updatedById: currentUser.id,
      },
      {transaction},
    );

    return bw_progress;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_progress = await db.bw_progress.findByPk(id, options);

    await bw_progress.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await bw_progress.destroy({
      transaction
    });

    return bw_progress;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bw_progress = await db.bw_progress.findOne(
      { where },
      { transaction },
    );

    if (!bw_progress) {
      return bw_progress;
    }

    const output = bw_progress.get({plain: true});

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

      if (filter.desc_en) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_progress',
            'desc_en',
            filter.desc_en,
          ),
        };
      }

      if (filter.desc_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_progress',
            'desc_ch',
            filter.desc_ch,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_progress',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_progress',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_progress',
            'updateby',
            filter.updateby,
          ),
        };
      }

      if (filter.progresstypesRange) {
        const [start, end] = filter.progresstypesRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            progresstypes: {
              ...where.progresstypes,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            progresstypes: {
              ...where.progresstypes,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.createdateRange) {
        const [start, end] = filter.createdateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            createdate: {
              ...where.createdate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            createdate: {
              ...where.createdate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.updatedateRange) {
        const [start, end] = filter.updatedateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            updatedate: {
              ...where.updatedate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            updatedate: {
              ...where.updatedate,
              [Op.lte]: end,
            },
          };
        }
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

    let { rows, count } = await db.bw_progress.findAndCountAll(
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
            'bw_progress',
            'desc_en',
            query,
          ),
        ],
      };
    }

    const records = await db.bw_progress.findAll({
      attributes: [ 'id', 'desc_en' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['desc_en', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.desc_en,
    }));
  }

};

