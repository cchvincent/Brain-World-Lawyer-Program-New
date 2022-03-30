const db = require('../db/models');
const Bw_officesDBApi = require('../db/api/bw_offices');

module.exports = class Bw_officesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_officesDBApi.create(
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
      let bw_offices = await Bw_officesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_offices) {
        throw new ValidationError(
          'bw_officesNotFound',
        );
      }

      await Bw_officesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_offices;

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

      await Bw_officesDBApi.remove(
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

