
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Bw_casefilesDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const bw_casefiles = await db.bw_casefiles.create(
  {
  id: data.id || undefined,

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

    casefilename: data.casefilename
    ||
    null
,

    caseyear: data.caseyear
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

    filedate: data.filedate
    ||
    null
,

    fileformat: data.fileformat
    ||
    null
,

    filefreetext: data.filefreetext
    ||
    null
,

    status: data.status
    ||
    null
,

    fileseq: data.fileseq
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

  return bw_casefiles;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_casefiles = await db.bw_casefiles.findByPk(id, {
      transaction,
    });

    await bw_casefiles.update(
      {

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

        casefilename: data.casefilename
        ||
        null
,

        caseyear: data.caseyear
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

        filedate: data.filedate
        ||
        null
,

        fileformat: data.fileformat
        ||
        null
,

        filefreetext: data.filefreetext
        ||
        null
,

        status: data.status
        ||
        null
,

        fileseq: data.fileseq
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

    return bw_casefiles;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_casefiles = await db.bw_casefiles.findByPk(id, options);

    await bw_casefiles.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await bw_casefiles.destroy({
      transaction
    });

    return bw_casefiles;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bw_casefiles = await db.bw_casefiles.findOne(
      { where },
      { transaction },
    );

    if (!bw_casefiles) {
      return bw_casefiles;
    }

    const output = bw_casefiles.get({plain: true});

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

      if (filter.documentboxname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'documentboxname',
            filter.documentboxname,
          ),
        };
      }

      if (filter.refno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'refno',
            filter.refno,
          ),
        };
      }

      if (filter.casefilename) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'casefilename',
            filter.casefilename,
          ),
        };
      }

      if (filter.caseno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'caseno',
            filter.caseno,
          ),
        };
      }

      if (filter.letterheading) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'letterheading',
            filter.letterheading,
          ),
        };
      }

      if (filter.filedate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'filedate',
            filter.filedate,
          ),
        };
      }

      if (filter.fileformat) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'fileformat',
            filter.fileformat,
          ),
        };
      }

      if (filter.filefreetext) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'filefreetext',
            filter.filefreetext,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_casefiles',
            'updateby',
            filter.updateby,
          ),
        };
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

    let { rows, count } = await db.bw_casefiles.findAndCountAll(
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
            'bw_casefiles',
            'documentboxid',
            query,
          ),
        ],
      };
    }

    const records = await db.bw_casefiles.findAll({
      attributes: [ 'id', 'documentboxid' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['documentboxid', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.documentboxid,
    }));
  }

};

