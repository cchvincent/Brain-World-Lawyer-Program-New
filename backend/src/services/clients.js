const db = require('../db/models');
const ClientsDBApi = require('../db/api/clients');

module.exports = class ClientsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await ClientsDBApi.create(
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
      let clients = await ClientsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!clients) {
        throw new ValidationError(
          'clientsNotFound',
        );
      }

      await ClientsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return clients;

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

      await ClientsDBApi.remove(
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

