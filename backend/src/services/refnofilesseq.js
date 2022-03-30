const db = require('../db/models');
const RefnofilesseqDBApi = require('../db/api/refnofilesseq');

module.exports = class RefnofilesseqService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await RefnofilesseqDBApi.create(
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
      let refnofilesseq = await RefnofilesseqDBApi.findBy(
        {id},
        {transaction},
      );

      if (!refnofilesseq) {
        throw new ValidationError(
          'refnofilesseqNotFound',
        );
      }

      await RefnofilesseqDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return refnofilesseq;

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

      await RefnofilesseqDBApi.remove(
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

