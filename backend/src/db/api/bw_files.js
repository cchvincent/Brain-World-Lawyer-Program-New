
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Bw_filesDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const bw_files = await db.bw_files.create(
  {
  id: data.id || undefined,

    casefilename: data.casefilename
    ||
    null
,

    caseyear: data.caseyear
    ||
    null
,

    documentboxid: data.documentboxid
    ||
    null
,

    documentboxname: data.documentboxname
    ||
    null
,

    refno: data.refno
    ||
    null
,

    caseno: data.caseno
    ||
    null
,

    letterheading: data.letterheading
    ||
    null
,

    filefreetext: data.filefreetext
    ||
    null
,

    fileseq: data.fileseq
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

  return bw_files;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_files = await db.bw_files.findByPk(id, {
      transaction,
    });

    await bw_files.update(
      {

        casefilename: data.casefilename
        ||
        null
,

        caseyear: data.caseyear
        ||
        null
,

        documentboxid: data.documentboxid
        ||
        null
,

        documentboxname: data.documentboxname
        ||
        null
,

        refno: data.refno
        ||
        null
,

        caseno: data.caseno
        ||
        null
,

        letterheading: data.letterheading
        ||
        null
,

        filefreetext: data.filefreetext
        ||
        null
,

        fileseq: data.fileseq
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

    return bw_files;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_files = await db.bw_files.findByPk(id, options);

    await bw_files.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await bw_files.destroy({
      transaction
    });

    return bw_files;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bw_files = await db.bw_files.findOne(
      { where },
      { transaction },
    );

    if (!bw_files) {
      return bw_files;
    }

    const output = bw_files.get({plain: true});

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

      if (filter.casefilename) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'casefilename',
            filter.casefilename,
          ),
        };
      }

      if (filter.documentboxname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'documentboxname',
            filter.documentboxname,
          ),
        };
      }

      if (filter.refno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'refno',
            filter.refno,
          ),
        };
      }

      if (filter.caseno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'caseno',
            filter.caseno,
          ),
        };
      }

      if (filter.letterheading) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'letterheading',
            filter.letterheading,
          ),
        };
      }

      if (filter.filefreetext) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'filefreetext',
            filter.filefreetext,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_files',
            'updateby',
            filter.updateby,
          ),
        };
      }

      if (filter.caseyearRange) {
        const [start, end] = filter.caseyearRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            caseyear: {
              ...where.caseyear,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            caseyear: {
              ...where.caseyear,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.documentboxidRange) {
        const [start, end] = filter.documentboxidRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            documentboxid: {
              ...where.documentboxid,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            documentboxid: {
              ...where.documentboxid,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.fileseqRange) {
        const [start, end] = filter.fileseqRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            fileseq: {
              ...where.fileseq,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            fileseq: {
              ...where.fileseq,
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

    let { rows, count } = await db.bw_files.findAndCountAll(
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
            'bw_files',
            'casefilename',
            query,
          ),
        ],
      };
    }

    const records = await db.bw_files.findAll({
      attributes: [ 'id', 'casefilename' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['casefilename', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.casefilename,
    }));
  }

};

