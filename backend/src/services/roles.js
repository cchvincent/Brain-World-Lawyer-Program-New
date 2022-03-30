const db = require('../db/models');
const RolesDBApi = require('../db/api/roles');

module.exports = class RolesService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await RolesDBApi.create(
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
      let roles = await RolesDBApi.findBy(
        {id},
        {transaction},
      );

      if (!roles) {
        throw new ValidationError(
          'rolesNotFound',
        );
      }

      await RolesDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return roles;

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

      await RolesDBApi.remove(
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

