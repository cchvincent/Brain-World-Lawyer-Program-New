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

                    await queryInterface.createTable('clients', {
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
                      'clients',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'address_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'address_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'contactno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'contactperson_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'contactperson_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'mobile',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'hkic',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'clients',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('companys', {
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
                      'companys',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'address_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'address_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'slogan_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'slogan_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'companys',
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
                        'companys',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'slogan_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'slogan_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'address_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'address_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'companys',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('companys', { transaction });

                    await queryInterface.removeColumn(
                        'clients',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'hkic',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'mobile',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'contactperson_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'contactperson_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'contactno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'address_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'address_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'clients',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('clients', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
