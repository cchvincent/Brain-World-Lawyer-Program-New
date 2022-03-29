const db = require('../db/models');
const CaseheaderreferencesDBApi = require('../db/api/caseheaderreferences');

module.exports = class CaseheaderreferencesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CaseheaderreferencesDBApi.create(data, {
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
      let caseheaderreferences = await CaseheaderreferencesDBApi.findBy(
        { id },
        { transaction },
      );

      if (!caseheaderreferences) {
        throw new ValidationError('caseheaderreferencesNotFound');
      }

      await CaseheaderreferencesDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return caseheaderreferences;
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

      await CaseheaderreferencesDBApi.remove(id, {
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
