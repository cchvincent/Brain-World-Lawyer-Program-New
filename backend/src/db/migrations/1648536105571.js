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

                    await queryInterface.createTable('caseserial', {
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
                      'caseserial',
                      'serialcode',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('casestatus', {
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
                      'casestatus',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casestatus',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('casetypes', {
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
                      'casetypes',
                      'casetypes',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casetypes',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('category', {
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
                      'category',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'category',
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
                        'category',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'category',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('category', { transaction });

                    await queryInterface.removeColumn(
                        'casetypes',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casetypes',
                        'casetypes',
                        { transaction }
                    );

                    await queryInterface.dropTable('casetypes', { transaction });

                    await queryInterface.removeColumn(
                        'casestatus',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casestatus',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('casestatus', { transaction });

                    await queryInterface.removeColumn(
                        'caseserial',
                        'serialcode',
                        { transaction }
                    );

                    await queryInterface.dropTable('caseserial', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
