const db = require('../db/models');
const Bw_casefilesDBApi = require('../db/api/bw_casefiles');

module.exports = class Bw_casefilesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_casefilesDBApi.create(
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
      let bw_casefiles = await Bw_casefilesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_casefiles) {
        throw new ValidationError(
          'bw_casefilesNotFound',
        );
      }

      await Bw_casefilesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_casefiles;

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

      await Bw_casefilesDBApi.remove(
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

