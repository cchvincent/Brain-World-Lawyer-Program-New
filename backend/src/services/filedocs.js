const db = require('../db/models');
const FiledocsDBApi = require('../db/api/filedocs');

module.exports = class FiledocsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await FiledocsDBApi.create(
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
      let filedocs = await FiledocsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!filedocs) {
        throw new ValidationError(
          'filedocsNotFound',
        );
      }

      await FiledocsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return filedocs;

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

      await FiledocsDBApi.remove(
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

