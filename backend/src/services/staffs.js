const db = require('../db/models');
const StaffsDBApi = require('../db/api/staffs');

module.exports = class StaffsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await StaffsDBApi.create(
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
      let staffs = await StaffsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!staffs) {
        throw new ValidationError(
          'staffsNotFound',
        );
      }

      await StaffsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return staffs;

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

      await StaffsDBApi.remove(
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

