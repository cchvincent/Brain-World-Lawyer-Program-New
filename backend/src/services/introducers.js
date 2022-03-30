const db = require('../db/models');
const IntroducersDBApi = require('../db/api/introducers');

module.exports = class IntroducersService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await IntroducersDBApi.create(
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
      let introducers = await IntroducersDBApi.findBy(
        {id},
        {transaction},
      );

      if (!introducers) {
        throw new ValidationError(
          'introducersNotFound',
        );
      }

      await IntroducersDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return introducers;

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

      await IntroducersDBApi.remove(
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

