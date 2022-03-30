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
                        'timebar',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'timebar',
                      {
                          type: Sequelize.DataTypes.DATEONLY,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'introducers',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'handlers',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'supervisors',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'staffs',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'dla',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'conflictcheck',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'conflictcheck',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'clientcheck',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'clientcheck',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'moneylaundrycompliance',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'moneylaundrycompliance',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'caseprogress',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'caseprogressId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'bw_progress',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'status',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'statusId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'bw_casestatus',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'workaccident',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'workaccident',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'liabilityadmitted',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'liabilityadmitted',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'approvalstatus',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'approvalstatus',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'dla',
                      {
                          type: Sequelize.DataTypes.ENUM,

                            values: ['Yes','No'],

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'createbyId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'users',
                                key: 'id',
                            },

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'updatebyId',
                      {
                          type: Sequelize.DataTypes.UUID,

                            references: {
                                model: 'users',
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
                        'updatebyId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'createbyId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'dla',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'approvalstatus',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'approvalstatus',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'liabilityadmitted',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'liabilityadmitted',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'workaccident',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'workaccident',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'statusId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'caseprogressId',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'caseprogress',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'moneylaundrycompliance',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'moneylaundrycompliance',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'clientcheck',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'clientcheck',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'conflictcheck',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'conflictcheck',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'dla',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'staffs',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'supervisors',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'handlers',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'introducers',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.removeColumn(
                        'bw_caseheader',
                        'timebar',
                        { transaction }
                    );

                    await queryInterface.addColumn(
                      'bw_caseheader',
                      'timebar',
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
    }
};
