const db = require('../db/models');
const Bw_refnofilesseqDBApi = require('../db/api/bw_refnofilesseq');

module.exports = class Bw_refnofilesseqService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await Bw_refnofilesseqDBApi.create(
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
      let bw_refnofilesseq = await Bw_refnofilesseqDBApi.findBy(
        {id},
        {transaction},
      );

      if (!bw_refnofilesseq) {
        throw new ValidationError(
          'bw_refnofilesseqNotFound',
        );
      }

      await Bw_refnofilesseqDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return bw_refnofilesseq;

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

      await Bw_refnofilesseqDBApi.remove(
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

