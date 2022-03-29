const db = require('../db/models');
const CaseserialDBApi = require('../db/api/caseserial');

module.exports = class CaseserialService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CaseserialDBApi.create(data, {
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
      let caseserial = await CaseserialDBApi.findBy({ id }, { transaction });

      if (!caseserial) {
        throw new ValidationError('caseserialNotFound');
      }

      await CaseserialDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return caseserial;
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

      await CaseserialDBApi.remove(id, {
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
