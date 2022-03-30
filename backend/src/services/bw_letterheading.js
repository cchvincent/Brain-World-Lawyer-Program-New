const db = require('../db/models');
const Bw_letterheadingDBApi = require('../db/api/bw_letterheading');

module.exports = class Bw_letterheadingService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_letterheadingDBApi.create(
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
      let bw_letterheading = await Bw_letterheadingDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_letterheading) {
        throw new ValidationError(
          'bw_letterheadingNotFound',
        );
      }

      await Bw_letterheadingDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_letterheading;

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

      await Bw_letterheadingDBApi.remove(
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

