
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class IntroducersDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const introducers = await db.introducers.create(
  {
  id: data.id || undefined,

    name_en: data.name_en
    ||
    null
,

    name_ch: data.name_ch
    ||
    null
,

    initial: data.initial
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

  return introducers;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const introducers = await db.introducers.findByPk(id, {
      transaction,
    });

    await introducers.update(
      {

        name_en: data.name_en
        ||
        null
,

        name_ch: data.name_ch
        ||
        null
,

        initial: data.initial
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

    return introducers;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const introducers = await db.introducers.findByPk(id, options);

    await introducers.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await introducers.destroy({
      transaction
    });

    return introducers;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const introducers = await db.introducers.findOne(
      { where },
      { transaction },
    );

    if (!introducers) {
      return introducers;
    }

    const output = introducers.get({plain: true});

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

      if (filter.name_en) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'name_en',
            filter.name_en,
          ),
        };
      }

      if (filter.name_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'name_ch',
            filter.name_ch,
          ),
        };
      }

      if (filter.initial) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'initial',
            filter.initial,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'introducers',
            'updateby',
            filter.updateby,
          ),
        };
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

    let { rows, count } = await db.introducers.findAndCountAll(
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
            'introducers',
            'name_en',
            query,
          ),
        ],
      };
    }

    const records = await db.introducers.findAll({
      attributes: [ 'id', 'name_en' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['name_en', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.name_en,
    }));
  }

};

