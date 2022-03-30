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

                    await queryInterface.createTable('casefiles', {
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
                      'casefiles',
                      'documentboxid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'documentboxname',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'refno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'caseyear',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'casefilename',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'caseno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'letterheading',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'filedate',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'fileformat',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'filefreetext',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'casefiles',
                      'fileseq',
                      {
                          type: Sequelize.DataTypes.INTEGER,

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
                        'casefiles',
                        'fileseq',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'filefreetext',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'fileformat',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'filedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'letterheading',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'caseno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'casefilename',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'caseyear',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'refno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'documentboxname',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'casefiles',
                        'documentboxid',
                        { transaction }
                    );

                    await queryInterface.dropTable('casefiles', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
