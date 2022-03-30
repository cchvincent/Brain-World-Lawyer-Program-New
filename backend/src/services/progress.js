const db = require('../db/models');
const ProgressDBApi = require('../db/api/progress');

module.exports = class ProgressService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await ProgressDBApi.create(
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
      let progress = await ProgressDBApi.findBy(
        {id},
        {transaction},
      );

      if (!progress) {
        throw new ValidationError(
          'progressNotFound',
        );
      }

      await ProgressDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return progress;

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

      await ProgressDBApi.remove(
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

