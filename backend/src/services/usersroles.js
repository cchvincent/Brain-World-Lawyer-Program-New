const db = require('../db/models');
const UsersrolesDBApi = require('../db/api/usersroles');

module.exports = class UsersrolesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await UsersrolesDBApi.create(
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
      let usersroles = await UsersrolesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!usersroles) {
        throw new ValidationError(
          'usersrolesNotFound',
        );
      }

      await UsersrolesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return usersroles;

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

      await UsersrolesDBApi.remove(
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

