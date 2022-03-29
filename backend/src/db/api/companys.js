
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CompanysDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const companys = await db.companys.create(
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

    address_en: data.address_en
    ||
    null
,

    address_ch: data.address_ch
    ||
    null
,

    slogan_en: data.slogan_en
    ||
    null
,

    slogan_ch: data.slogan_ch
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

  return companys;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const companys = await db.companys.findByPk(id, {
      transaction,
    });

    await companys.update(
      {

        name_en: data.name_en
        ||
        null
,

        name_ch: data.name_ch
        ||
        null
,

        address_en: data.address_en
        ||
        null
,

        address_ch: data.address_ch
        ||
        null
,

        slogan_en: data.slogan_en
        ||
        null
,

        slogan_ch: data.slogan_ch
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

    return companys;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const companys = await db.companys.findByPk(id, options);

    await companys.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await companys.destroy({
      transaction
    });

    return companys;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const companys = await db.companys.findOne(
      { where },
      { transaction },
    );

    if (!companys) {
      return companys;
    }

    const output = companys.get({plain: true});

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
            'companys',
            'name_en',
            filter.name_en,
          ),
        };
      }

      if (filter.name_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'name_ch',
            filter.name_ch,
          ),
        };
      }

      if (filter.address_en) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'address_en',
            filter.address_en,
          ),
        };
      }

      if (filter.address_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'address_ch',
            filter.address_ch,
          ),
        };
      }

      if (filter.slogan_en) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'slogan_en',
            filter.slogan_en,
          ),
        };
      }

      if (filter.slogan_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'slogan_ch',
            filter.slogan_ch,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'companys',
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

    let { rows, count } = await db.companys.findAndCountAll(
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
            'companys',
            'name_en',
            query,
          ),
        ],
      };
    }

    const records = await db.companys.findAll({
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

