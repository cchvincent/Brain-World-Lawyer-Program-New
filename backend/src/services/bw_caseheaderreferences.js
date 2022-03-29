const db = require('../db/models');
const Bw_caseheaderreferencesDBApi = require('../db/api/bw_caseheaderreferences');

module.exports = class Bw_caseheaderreferencesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_caseheaderreferencesDBApi.create(
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let bw_caseheaderreferences = await Bw_caseheaderreferencesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_caseheaderreferences) {
        throw new ValidationError(
          'bw_caseheaderreferencesNotFound',
        );
      }

      await Bw_caseheaderreferencesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_caseheaderreferences;

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.role !== 'admin') {
        throw new ValidationError(
          'errors.forbidden.message',
        );
      }

      await Bw_caseheaderreferencesDBApi.remove(
        id,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};

