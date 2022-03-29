const db = require('../db/models');
const CompanysDBApi = require('../db/api/companys');

module.exports = class CompanysService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CompanysDBApi.create(
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
      let companys = await CompanysDBApi.findBy(
        {id},
        {transaction},
      );

      if (!companys) {
        throw new ValidationError(
          'companysNotFound',
        );
      }

      await CompanysDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return companys;

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

      await CompanysDBApi.remove(
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

