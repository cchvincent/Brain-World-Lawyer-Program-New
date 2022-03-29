const db = require('../db/models');
const CasetypesDBApi = require('../db/api/casetypes');

module.exports = class CasetypesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CasetypesDBApi.create(
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
      let casetypes = await CasetypesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!casetypes) {
        throw new ValidationError(
          'casetypesNotFound',
        );
      }

      await CasetypesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return casetypes;

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

      await CasetypesDBApi.remove(
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

