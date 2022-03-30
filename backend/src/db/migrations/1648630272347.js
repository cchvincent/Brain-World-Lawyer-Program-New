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

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'casetypesidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'casetypesidId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'bw_casetypes',
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
                        'bw_caseheader',
                        'casetypesidId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
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
    }
};
