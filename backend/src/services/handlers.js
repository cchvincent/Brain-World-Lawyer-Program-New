const db = require('../db/models');
const HandlersDBApi = require('../db/api/handlers');

module.exports = class HandlersService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await HandlersDBApi.create(
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
      let handlers = await HandlersDBApi.findBy(
        {id},
        {transaction},
      );

      if (!handlers) {
        throw new ValidationError(
          'handlersNotFound',
        );
      }

      await HandlersDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return handlers;

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

      await HandlersDBApi.remove(
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

