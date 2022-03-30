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

                    await queryInterface.addColumn(
                      'bw_casefiles',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_casefiles',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_casefiles',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_casefiles',
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
                        'bw_casefiles',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_casefiles',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_casefiles',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_casefiles',
                        'createdate',
                        { transaction }
                    );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
