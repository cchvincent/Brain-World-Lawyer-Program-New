const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CategoryDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const category = await db.category.create(
      {
        id: data.id || undefined,

        desc_en: data.desc_en || null,
        desc_ch: data.desc_ch || null,
        status: data.status || null,
        createdate: data.createdate || null,
        createby: data.createby || null,
        updatedate: data.updatedate || null,
        updateby: data.updateby || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return category;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const category = await db.category.findByPk(id, {
      transaction,
    });

    await category.update(
      {
        desc_en: data.desc_en || null,
        desc_ch: data.desc_ch || null,
        status: data.status || null,
        createdate: data.createdate || null,
        createby: data.createby || null,
        updatedate: data.updatedate || null,
        updateby: data.updateby || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return category;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const category = await db.category.findByPk(id, options);

    await category.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await category.destroy({
      transaction,
    });

    return category;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const category = await db.category.findOne({ where }, { transaction });

    if (!category) {
      return category;
    }

    const output = category.get({ plain: true });

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
    let include = [];

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
          [Op.and]: Utils.ilike('category', 'desc_en', filter.desc_en),
        };
      }

      if (filter.desc_ch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('category', 'desc_ch', filter.desc_ch),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('category', 'status', filter.status),
        };
      }

      if (filter.createby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('category', 'createby', filter.createby),
        };
      }

      if (filter.updateby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('category', 'updateby', filter.updateby),
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
          active: filter.active === true || filter.active === 'true',
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

    let { rows, count } = await db.category.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy ? [orderBy.split('_')] : [['createdAt', 'DESC']],
      transaction,
    });

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
          Utils.ilike('category', 'desc_en', query),
        ],
      };
    }

    const records = await db.category.findAll({
      attributes: ['id', 'desc_en'],
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
