const db = require('../db/models');
const Bw_filedocsDBApi = require('../db/api/bw_filedocs');

module.exports = class Bw_filedocsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_filedocsDBApi.create(
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
      let bw_filedocs = await Bw_filedocsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_filedocs) {
        throw new ValidationError(
          'bw_filedocsNotFound',
        );
      }

      await Bw_filedocsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_filedocs;

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

      await Bw_filedocsDBApi.remove(
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

