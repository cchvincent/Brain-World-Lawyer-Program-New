const db = require('../db/models');
const OfficesDBApi = require('../db/api/offices');

module.exports = class OfficesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await OfficesDBApi.create(
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
      let offices = await OfficesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!offices) {
        throw new ValidationError(
          'officesNotFound',
        );
      }

      await OfficesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return offices;

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

      await OfficesDBApi.remove(
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

