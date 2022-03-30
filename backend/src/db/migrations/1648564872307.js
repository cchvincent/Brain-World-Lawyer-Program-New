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

                    await queryInterface.createTable('filedocs', {
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
                    }, { transaction });

                    await queryInterface.addColumn(
                      'filedocs',
                      'refno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'parentid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'docboxname',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'folderpath',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'filename',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'filedocs',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('files', {
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
                    }, { transaction });

                    await queryInterface.addColumn(
                      'files',
                      'documentboxid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'documentboxname',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'refno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'filename',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'year',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'caseno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'letterheading',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'filedate',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'fileformat',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'filefreetext',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'fileseq',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'files',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
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

                    await queryInterface.removeColumn(
                        'files',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'fileseq',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'filefreetext',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'fileformat',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'filedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'letterheading',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'caseno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'year',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'filename',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'refno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'documentboxname',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'files',
                        'documentboxid',
                        { transaction }
                    );

                    await queryInterface.dropTable('files', { transaction });

                    await queryInterface.removeColumn(
                        'filedocs',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'filename',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'folderpath',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'docboxname',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'parentid',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'filedocs',
                        'refno',
                        { transaction }
                    );

                    await queryInterface.dropTable('filedocs', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
