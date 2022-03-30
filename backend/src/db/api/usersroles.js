
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class UsersrolesDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const usersroles = await db.usersroles.create(
  {
  id: data.id || undefined,

    userid: data.userid
    ||
    null
,

    roleid: data.roleid
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

  return usersroles;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const usersroles = await db.usersroles.findByPk(id, {
      transaction,
    });

    await usersroles.update(
      {

        userid: data.userid
        ||
        null
,

        roleid: data.roleid
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

    return usersroles;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const usersroles = await db.usersroles.findByPk(id, options);

    await usersroles.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await usersroles.destroy({
      transaction
    });

    return usersroles;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const usersroles = await db.usersroles.findOne(
      { where },
      { transaction },
    );

    if (!usersroles) {
      return usersroles;
    }

    const output = usersroles.get({plain: true});

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

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'usersroles',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'usersroles',
            'updateby',
            filter.updateby,
          ),
        };
      }

      if (filter.useridRange) {
        const [start, end] = filter.useridRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            userid: {
              ...where.userid,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            userid: {
              ...where.userid,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.roleidRange) {
        const [start, end] = filter.roleidRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            roleid: {
              ...where.roleid,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            roleid: {
              ...where.roleid,
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

    let { rows, count } = await db.usersroles.findAndCountAll(
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
            'usersroles',
            'userid',
            query,
          ),
        ],
      };
    }

    const records = await db.usersroles.findAll({
      attributes: [ 'id', 'userid' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['userid', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.userid,
    }));
  }

};

