const db = require('../db/models');
const CategoryDBApi = require('../db/api/category');

module.exports = class CategoryService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await CategoryDBApi.create(
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
      let category = await CategoryDBApi.findBy(
        {id},
        {transaction},
      );

      if (!category) {
        throw new ValidationError(
          'categoryNotFound',
        );
      }

      await CategoryDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return category;

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

      await CategoryDBApi.remove(
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

