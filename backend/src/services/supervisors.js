const db = require('../db/models');
const SupervisorsDBApi = require('../db/api/supervisors');

module.exports = class SupervisorsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await SupervisorsDBApi.create(
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
      let supervisors = await SupervisorsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!supervisors) {
        throw new ValidationError(
          'supervisorsNotFound',
        );
      }

      await SupervisorsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return supervisors;

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

      await SupervisorsDBApi.remove(
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

