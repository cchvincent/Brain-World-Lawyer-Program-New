
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class FiledocsDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const filedocs = await db.filedocs.create(
  {
  id: data.id || undefined,

    refno: data.refno
    ||
    null
,

    parentid: data.parentid
    ||
    null
,

    docboxname: data.docboxname
    ||
    null
,

    folderpath: data.folderpath
    ||
    null
,

    filename: data.filename
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

  return filedocs;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const filedocs = await db.filedocs.findByPk(id, {
      transaction,
    });

    await filedocs.update(
      {

        refno: data.refno
        ||
        null
,

        parentid: data.parentid
        ||
        null
,

        docboxname: data.docboxname
        ||
        null
,

        folderpath: data.folderpath
        ||
        null
,

        filename: data.filename
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

    return filedocs;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const filedocs = await db.filedocs.findByPk(id, options);

    await filedocs.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await filedocs.destroy({
      transaction
    });

    return filedocs;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const filedocs = await db.filedocs.findOne(
      { where },
      { transaction },
    );

    if (!filedocs) {
      return filedocs;
    }

    const output = filedocs.get({plain: true});

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

      if (filter.refno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'refno',
            filter.refno,
          ),
        };
      }

      if (filter.docboxname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'docboxname',
            filter.docboxname,
          ),
        };
      }

      if (filter.folderpath) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'folderpath',
            filter.folderpath,
          ),
        };
      }

      if (filter.filename) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'filename',
            filter.filename,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'filedocs',
            'updateby',
            filter.updateby,
          ),
        };
      }

      if (filter.parentidRange) {
        const [start, end] = filter.parentidRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            parentid: {
              ...where.parentid,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            parentid: {
              ...where.parentid,
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

    let { rows, count } = await db.filedocs.findAndCountAll(
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
            'filedocs',
            'refno',
            query,
          ),
        ],
      };
    }

    const records = await db.filedocs.findAll({
      attributes: [ 'id', 'refno' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['refno', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.refno,
    }));
  }

};

