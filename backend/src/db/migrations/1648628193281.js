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
                      'bw_casefiles',
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
                      'caseheader',
                      'bw_caseheader',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'handlers',
                      'bw_handlers',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'introducers',
                      'bw_introducers',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'letterheading',
                      'bw_letterheading',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'offices',
                      'bw_offices',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'progress',
                      'bw_progress',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'refnofilesseq',
                      'bw_refnofilesseq',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'roles',
                      'bw_roles',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'staffs',
                      'bw_staffs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'supervisors',
                      'bw_supervisors',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'usersroles',
                      'bw_usersroles',
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
                      'bw_usersroles',
                      'usersroles',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_supervisors',
                      'supervisors',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_staffs',
                      'staffs',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_roles',
                      'roles',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_refnofilesseq',
                      'refnofilesseq',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_progress',
                      'progress',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_offices',
                      'offices',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_letterheading',
                      'letterheading',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_introducers',
                      'introducers',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_handlers',
                      'handlers',
                      { transaction }
                    );

                    await queryInterface.renameTable(
                      'bw_caseheader',
                      'caseheader',
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
                      'bw_casefiles',
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
