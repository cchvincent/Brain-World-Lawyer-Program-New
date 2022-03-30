
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

    timebar: data.timebar
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

    workaccident: data.workaccident
    ||
    null
,

    liabilityadmitted: data.liabilityadmitted
    ||
    null
,

    approvalstatus: data.approvalstatus
    ||
    null
,

    dla: data.dla
    ||
    null
,

    createdate: data.createdate
    ||
    null
,

    updatedate: data.updatedate
    ||
    null
,

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

    yearofcreation: data.yearofcreation
    ||
    null
,

    caseno: data.caseno
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

  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

    await bw_caseheader.setCaseprogress(data.caseprogress || null, {
    transaction,
    });

    await bw_caseheader.setStatus(data.status || null, {
    transaction,
    });

    await bw_caseheader.setCreateby(data.createby || null, {
    transaction,
    });

    await bw_caseheader.setUpdateby(data.updateby || null, {
    transaction,
    });

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

    await bw_caseheader.setIntroducers(data.introducers || [], {
    transaction,
    });

    await bw_caseheader.setHandlers(data.handlers || [], {
    transaction,
    });

    await bw_caseheader.setSupervisors(data.supervisors || [], {
    transaction,
    });

    await bw_caseheader.setStaffs(data.staffs || [], {
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

        timebar: data.timebar
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

        workaccident: data.workaccident
        ||
        null
,

        liabilityadmitted: data.liabilityadmitted
        ||
        null
,

        approvalstatus: data.approvalstatus
        ||
        null
,

        dla: data.dla
        ||
        null
,

        createdate: data.createdate
        ||
        null
,

        updatedate: data.updatedate
        ||
        null
,

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

        yearofcreation: data.yearofcreation
        ||
        null
,

        caseno: data.caseno
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

        updatedById: currentUser.id,
      },
      {transaction},
    );

    await bw_caseheader.setCaseprogress(data.caseprogress || null, {
      transaction,
    });

    await bw_caseheader.setStatus(data.status || null, {
      transaction,
    });

    await bw_caseheader.setCreateby(data.createby || null, {
      transaction,
    });

    await bw_caseheader.setUpdateby(data.updateby || null, {
      transaction,
    });

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

    await bw_caseheader.setIntroducers(data.introducers || [], {
      transaction,
    });

    await bw_caseheader.setHandlers(data.handlers || [], {
      transaction,
    });

    await bw_caseheader.setSupervisors(data.supervisors || [], {
      transaction,
    });

    await bw_caseheader.setStaffs(data.staffs || [], {
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

    output.introducers = await bw_caseheader.getIntroducers({
      transaction
    });

    output.handlers = await bw_caseheader.getHandlers({
      transaction
    });

    output.supervisors = await bw_caseheader.getSupervisors({
      transaction
    });

    output.staffs = await bw_caseheader.getStaffs({
      transaction
    });

    output.caseprogress = await bw_caseheader.getCaseprogress({
      transaction
    });

    output.status = await bw_caseheader.getStatus({
      transaction
    });

    output.createby = await bw_caseheader.getCreateby({
      transaction
    });

    output.updateby = await bw_caseheader.getUpdateby({
      transaction
    });

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
        model: db.bw_progress,
        as: 'caseprogress',
      },

      {
        model: db.bw_casestatus,
        as: 'status',
      },

      {
        model: db.users,
        as: 'createby',
      },

      {
        model: db.users,
        as: 'updateby',
      },

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

      {
        model: db.bw_introducers,
        as: 'introducers',
        through: filter.introducers ? { where: {
          [Op.or]: filter.introducers.split('|').map(item => {
            return { ['Id']: Utils.uuid(item) }
          })
        }} : null,
        required: filter.introducers ? true : null,
      },

      {
        model: db.bw_handlers,
        as: 'handlers',
        through: filter.handlers ? { where: {
          [Op.or]: filter.handlers.split('|').map(item => {
            return { ['Id']: Utils.uuid(item) }
          })
        }} : null,
        required: filter.handlers ? true : null,
      },

      {
        model: db.bw_supervisors,
        as: 'supervisors',
        through: filter.supervisors ? { where: {
          [Op.or]: filter.supervisors.split('|').map(item => {
            return { ['Id']: Utils.uuid(item) }
          })
        }} : null,
        required: filter.supervisors ? true : null,
      },

      {
        model: db.bw_staffs,
        as: 'staffs',
        through: filter.staffs ? { where: {
          [Op.or]: filter.staffs.split('|').map(item => {
            return { ['Id']: Utils.uuid(item) }
          })
        }} : null,
        required: filter.staffs ? true : null,
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

      if (filter.timebarRange) {
        const [start, end] = filter.timebarRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            timebar: {
              ...where.timebar,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            timebar: {
              ...where.timebar,
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

      if (filter.conflictcheck) {
        where = {
          ...where,
          conflictcheck: filter.conflictcheck,
        };
      }

      if (filter.clientcheck) {
        where = {
          ...where,
          clientcheck: filter.clientcheck,
        };
      }

      if (filter.moneylaundrycompliance) {
        where = {
          ...where,
          moneylaundrycompliance: filter.moneylaundrycompliance,
        };
      }

      if (filter.workaccident) {
        where = {
          ...where,
          workaccident: filter.workaccident,
        };
      }

      if (filter.liabilityadmitted) {
        where = {
          ...where,
          liabilityadmitted: filter.liabilityadmitted,
        };
      }

      if (filter.approvalstatus) {
        where = {
          ...where,
          approvalstatus: filter.approvalstatus,
        };
      }

      if (filter.dla) {
        where = {
          ...where,
          dla: filter.dla,
        };
      }

      if (filter.caseprogress) {
        var listItems = filter.caseprogress.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          caseprogressId: {[Op.or]: listItems}
        };
      }

      if (filter.status) {
        var listItems = filter.status.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          statusId: {[Op.or]: listItems}
        };
      }

      if (filter.createby) {
        var listItems = filter.createby.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          createbyId: {[Op.or]: listItems}
        };
      }

      if (filter.updateby) {
        var listItems = filter.updateby.split('|').map(item => {
          return  Utils.uuid(item)
        });

        where = {
          ...where,
          updatebyId: {[Op.or]: listItems}
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
            'timebar',
            query,
          ),
        ],
      };
    }

    const records = await db.bw_caseheader.findAll({
      attributes: [ 'id', 'timebar' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['timebar', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.timebar,
    }));
  }

};

