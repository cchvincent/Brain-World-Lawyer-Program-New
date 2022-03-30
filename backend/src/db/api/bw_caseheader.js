
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Bw_caseheaderDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const bw_caseheader = await db.bw_caseheader.create(
  {
  id: data.id || undefined,

    refno: data.refno
    ||
    null
,

    temprefno: data.temprefno
    ||
    null
,

    relatedcases: data.relatedcases
    ||
    null
,

    dateofaccident: data.dateofaccident
    ||
    null
,

    timebar: data.timebar
    ||
    null
,

    introducers: data.introducers
    ||
    null
,

    yearofcreation: data.yearofcreation
    ||
    null
,

    caseno: data.caseno
    ||
    null
,

    handlers: data.handlers
    ||
    null
,

    supervisors: data.supervisors
    ||
    null
,

    staffs: data.staffs
    ||
    null
,

    dla: data.dla
    ||
    null
,

    conflictcheck: data.conflictcheck
    ||
    null
,

    clientcheck: data.clientcheck
    ||
    null
,

    moneylaundrycompliance: data.moneylaundrycompliance
    ||
    null
,

    status: data.status
    ||
    null
,

    caseprogress: data.caseprogress
    ||
    null
,

    workaccident: data.workaccident
    ||
    null
,

    liabilityadmitted: data.liabilityadmitted
    ||
    null
,

    remarks: data.remarks
    ||
    null
,

    followuptasks: data.followuptasks
    ||
    null
,

    approvalstatus: data.approvalstatus
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

    await bw_caseheader.setCasetypesid(data.casetypesid || null, {
    transaction,
    });

    await bw_caseheader.setProgressid(data.progressid || null, {
    transaction,
    });

    await bw_caseheader.setCasefilelocationid(data.casefilelocationid || null, {
    transaction,
    });

    await bw_caseheader.setClientid(data.clientid || null, {
    transaction,
    });

  return bw_caseheader;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_caseheader = await db.bw_caseheader.findByPk(id, {
      transaction,
    });

    await bw_caseheader.update(
      {

        refno: data.refno
        ||
        null
,

        temprefno: data.temprefno
        ||
        null
,

        relatedcases: data.relatedcases
        ||
        null
,

        dateofaccident: data.dateofaccident
        ||
        null
,

        timebar: data.timebar
        ||
        null
,

        introducers: data.introducers
        ||
        null
,

        yearofcreation: data.yearofcreation
        ||
        null
,

        caseno: data.caseno
        ||
        null
,

        handlers: data.handlers
        ||
        null
,

        supervisors: data.supervisors
        ||
        null
,

        staffs: data.staffs
        ||
        null
,

        dla: data.dla
        ||
        null
,

        conflictcheck: data.conflictcheck
        ||
        null
,

        clientcheck: data.clientcheck
        ||
        null
,

        moneylaundrycompliance: data.moneylaundrycompliance
        ||
        null
,

        status: data.status
        ||
        null
,

        caseprogress: data.caseprogress
        ||
        null
,

        workaccident: data.workaccident
        ||
        null
,

        liabilityadmitted: data.liabilityadmitted
        ||
        null
,

        remarks: data.remarks
        ||
        null
,

        followuptasks: data.followuptasks
        ||
        null
,

        approvalstatus: data.approvalstatus
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

    await bw_caseheader.setCasetypesid(data.casetypesid || null, {
      transaction,
    });

    await bw_caseheader.setProgressid(data.progressid || null, {
      transaction,
    });

    await bw_caseheader.setCasefilelocationid(data.casefilelocationid || null, {
      transaction,
    });

    await bw_caseheader.setClientid(data.clientid || null, {
      transaction,
    });

    return bw_caseheader;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const bw_caseheader = await db.bw_caseheader.findByPk(id, options);

    await bw_caseheader.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await bw_caseheader.destroy({
      transaction
    });

    return bw_caseheader;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bw_caseheader = await db.bw_caseheader.findOne(
      { where },
      { transaction },
    );

    if (!bw_caseheader) {
      return bw_caseheader;
    }

    const output = bw_caseheader.get({plain: true});

    output.casetypesid = await bw_caseheader.getCasetypesid({
      transaction
    });

    output.progressid = await bw_caseheader.getProgressid({
      transaction
    });

    output.casefilelocationid = await bw_caseheader.getCasefilelocationid({
      transaction
    });

    output.clientid = await bw_caseheader.getClientid({
      transaction
    });

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

      {
        model: db.bw_casetypes,
        as: 'casetypesid',
      },

      {
        model: db.bw_progress,
        as: 'progressid',
      },

      {
        model: db.bw_offices,
        as: 'casefilelocationid',
      },

      {
        model: db.bw_clients,
        as: 'clientid',
      },

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
            'bw_caseheader',
            'refno',
            filter.refno,
          ),
        };
      }

      if (filter.temprefno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'temprefno',
            filter.temprefno,
          ),
        };
      }

      if (filter.relatedcases) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'relatedcases',
            filter.relatedcases,
          ),
        };
      }

      if (filter.timebar) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'timebar',
            filter.timebar,
          ),
        };
      }

      if (filter.introducers) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'introducers',
            filter.introducers,
          ),
        };
      }

      if (filter.yearofcreation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'yearofcreation',
            filter.yearofcreation,
          ),
        };
      }

      if (filter.caseno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'caseno',
            filter.caseno,
          ),
        };
      }

      if (filter.handlers) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'handlers',
            filter.handlers,
          ),
        };
      }

      if (filter.supervisors) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'supervisors',
            filter.supervisors,
          ),
        };
      }

      if (filter.staffs) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'staffs',
            filter.staffs,
          ),
        };
      }

      if (filter.dla) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'dla',
            filter.dla,
          ),
        };
      }

      if (filter.moneylaundrycompliance) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'moneylaundrycompliance',
            filter.moneylaundrycompliance,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'remarks',
            filter.remarks,
          ),
        };
      }

      if (filter.followuptasks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'followuptasks',
            filter.followuptasks,
          ),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'createby',
            filter.createby,
          ),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bw_caseheader',
            'updateby',
            filter.updateby,
          ),
        };
      }

      if (filter.dateofaccidentRange) {
        const [start, end] = filter.dateofaccidentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofaccident: {
              ...where.dateofaccident,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofaccident: {
              ...where.dateofaccident,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.conflictcheckRange) {
        const [start, end] = filter.conflictcheckRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            conflictcheck: {
              ...where.conflictcheck,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            conflictcheck: {
              ...where.conflictcheck,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.clientcheckRange) {
        const [start, end] = filter.clientcheckRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            clientcheck: {
              ...where.clientcheck,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            clientcheck: {
              ...where.clientcheck,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.caseprogressRange) {
        const [start, end] = filter.caseprogressRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            caseprogress: {
              ...where.caseprogress,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            caseprogress: {
              ...where.caseprogress,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.workaccidentRange) {
        const [start, end] = filter.workaccidentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            workaccident: {
              ...where.workaccident,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            workaccident: {
              ...where.workaccident,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.liabilityadmittedRange) {
        const [start, end] = filter.liabilityadmittedRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            liabilityadmitted: {
              ...where.liabilityadmitted,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            liabilityadmitted: {
              ...where.liabilityadmitted,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.approvalstatusRange) {
        const [start, end] = filter.approvalstatusRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            approvalstatus: {
              ...where.approvalstatus,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            approvalstatus: {
              ...where.approvalstatus,
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

      if (filter.casetypesid) {
        var listItems = filter.casetypesid.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          casetypesidId: {[Op.or]: listItems}
        };
      }

      if (filter.progressid) {
        var listItems = filter.progressid.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          progressidId: {[Op.or]: listItems}
        };
      }

      if (filter.casefilelocationid) {
        var listItems = filter.casefilelocationid.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          casefilelocationidId: {[Op.or]: listItems}
        };
      }

      if (filter.clientid) {
        var listItems = filter.clientid.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          clientidId: {[Op.or]: listItems}
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

    let { rows, count } = await db.bw_caseheader.findAndCountAll(
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
            'bw_caseheader',
            'casetypesid',
            query,
          ),
        ],
      };
    }

    const records = await db.bw_caseheader.findAll({
      attributes: [ 'id', 'casetypesid' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['casetypesid', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.casetypesid,
    }));
  }

};

