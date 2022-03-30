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

                    await queryInterface.renameTable(
                      'bw_casefiles',
                      'casefiles',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_filedocs',
                      'filedocs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_clients',
                      'clients',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_companys',
                      'companys',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_caseserial',
                      'caseserial',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_casestatus',
                      'casestatus',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_casetypes',
                      'casetypes',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_category',
                      'category',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_caseheaderreferences',
                      'caseheader',
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'caseprogressid',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'progressidId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'progress',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'clientid',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'clientidId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'clients',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'casefilelocationid',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'casefilelocationidId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'offices',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'casetypesid',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'casetypesidId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'casetypes',
                                key: 'id',
                            },

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
                        'caseheader',
                        'casetypesidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'casetypesid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'casefilelocationidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'casefilelocationid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'clientidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'clientid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'caseheader',
                        'progressidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'caseheader',
                      'caseprogressid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'caseheader',
                      'bw_caseheaderreferences',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'category',
                      'bw_category',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'casetypes',
                      'bw_casetypes',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'casestatus',
                      'bw_casestatus',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'caseserial',
                      'bw_caseserial',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'companys',
                      'bw_companys',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'clients',
                      'bw_clients',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'filedocs',
                      'bw_filedocs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'casefiles',
                      'bw_casefiles',
                      { transaction }
                    );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
