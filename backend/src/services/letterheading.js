const db = require('../db/models');
const LetterheadingDBApi = require('../db/api/letterheading');

module.exports = class LetterheadingService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await LetterheadingDBApi.create(
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
      let letterheading = await LetterheadingDBApi.findBy(
        {id},
        {transaction},
      );

      if (!letterheading) {
        throw new ValidationError(
          'letterheadingNotFound',
        );
      }

      await LetterheadingDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return letterheading;

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

      await LetterheadingDBApi.remove(
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

