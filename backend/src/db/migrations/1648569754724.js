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
                      'casefiles',
                      'bw_files',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'filedocs',
                      'bw_filedocs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'clients',
                      'bw_clients',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'companys',
                      'bw_companys',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'caseserial',
                      'bw_caseserial',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'casestatus',
                      'bw_casestatus',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'casetypes',
                      'bw_casetypes',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'category',
                      'bw_category',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'caseheaderreferences',
                      'bw_caseheaderreferences',
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

                    await queryInterface.renameTable(
                      'bw_caseheaderreferences',
                      'caseheaderreferences',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_category',
                      'category',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_casetypes',
                      'casetypes',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_casestatus',
                      'casestatus',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_caseserial',
                      'caseserial',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_companys',
                      'companys',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_clients',
                      'clients',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_filedocs',
                      'filedocs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_files',
                      'casefiles',
                      { transaction }
                    );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
