module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async up(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'firstName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'lastName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'phoneNumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'role',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['admin', 'user'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'disabled',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerified',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'provider',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.createTable(
        'caseheaderreferences',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'refno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'relatedcases',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'dateofaccident',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'timebar',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'caseprogressid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'clientid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'casefilelocationid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'casetypesid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'introducers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'yearofcreation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'caseno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'handlers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'supervisors',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'staffs',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'dla',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'conflictcheck',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'clientcheck',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'moneylaundrycompliance',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'temprefno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'status',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'caseprogress',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'workaccident',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'liabilityadmitted',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'followuptasks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'approvalstatus',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'createdate',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'createby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'updatedate',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'caseheaderreferences',
        'updateby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async down(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('caseheaderreferences', 'updateby', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'updatedate', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'createby', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'createdate', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'approvalstatus',
        { transaction },
      );

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'followuptasks',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'remarks', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'liabilityadmitted',
        { transaction },
      );

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'workaccident',
        { transaction },
      );

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'caseprogress',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'status', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'temprefno', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'moneylaundrycompliance',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'clientcheck', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'conflictcheck',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'dla', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'staffs', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'supervisors', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'handlers', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'caseno', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'yearofcreation',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'introducers', {
        transaction,
      });

      await queryInterface.removeColumn('caseheaderreferences', 'casetypesid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'casefilelocationid',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'clientid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'caseprogressid',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'timebar', {
        transaction,
      });

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'dateofaccident',
        { transaction },
      );

      await queryInterface.removeColumn(
        'caseheaderreferences',
        'relatedcases',
        { transaction },
      );

      await queryInterface.removeColumn('caseheaderreferences', 'refno', {
        transaction,
      });

      await queryInterface.dropTable('caseheaderreferences', { transaction });

      await queryInterface.removeColumn('users', 'provider', { transaction });

      await queryInterface.removeColumn(
        'users',
        'passwordResetTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'passwordResetToken', {
        transaction,
      });

      await queryInterface.removeColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'emailVerificationToken', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'emailVerified', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'password', { transaction });

      await queryInterface.removeColumn('users', 'disabled', { transaction });

      await queryInterface.removeColumn('users', 'role', { transaction });

      await queryInterface.removeColumn('users', 'email', { transaction });

      await queryInterface.removeColumn('users', 'phoneNumber', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'lastName', { transaction });

      await queryInterface.removeColumn('users', 'firstName', { transaction });

      await queryInterface.dropTable('users', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
