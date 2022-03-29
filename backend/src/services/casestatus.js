const db = require('../db/models');
const CasestatusDBApi = require('../db/api/casestatus');

module.exports = class CasestatusService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CasestatusDBApi.create(data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let casestatus = await CasestatusDBApi.findBy({ id }, { transaction });

      if (!casestatus) {
        throw new ValidationError('casestatusNotFound');
      }

      await CasestatusDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return casestatus;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.role !== 'admin') {
        throw new ValidationError('errors.forbidden.message');
      }

      await CasestatusDBApi.remove(id, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
