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

                    await queryInterface.createTable('handlers', {
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
                      'handlers',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'initial',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'handlers',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('introducers', {
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
                      'introducers',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'initial',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'introducers',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('letterheading', {
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
                      'letterheading',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'letterheading',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('offices', {
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
                      'offices',
                      'officetypes',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'offices',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('progress', {
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
                      'progress',
                      'progresstypes',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'desc_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'desc_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'progress',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('refnofilesseq', {
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
                      'refnofilesseq',
                      'clientid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'refno',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'casefilename',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'fileseq',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'refnofilesseq',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('roles', {
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
                      'roles',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'roles',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('staffs', {
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
                      'staffs',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'initial',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'staffs',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('supervisors', {
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
                      'supervisors',
                      'name_en',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'name_ch',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'initial',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'status',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'supervisors',
                      'updateby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.createTable('usersroles', {
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
                      'usersroles',
                      'userid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'usersroles',
                      'roleid',
                      {
                          type: Sequelize.DataTypes.INTEGER,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'usersroles',
                      'createdate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'usersroles',
                      'createby',
                      {
                          type: Sequelize.DataTypes.TEXT,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'usersroles',
                      'updatedate',
                      {
                          type: Sequelize.DataTypes.DATE,

                      },
                      { transaction }
                    );

                    await queryInterface.addColumn(
                      'usersroles',
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
                        'usersroles',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'usersroles',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'usersroles',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'usersroles',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'usersroles',
                        'roleid',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'usersroles',
                        'userid',
                        { transaction }
                    );

                    await queryInterface.dropTable('usersroles', { transaction });

                    await queryInterface.removeColumn(
                        'supervisors',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'initial',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'supervisors',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('supervisors', { transaction });

                    await queryInterface.removeColumn(
                        'staffs',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'initial',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'staffs',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('staffs', { transaction });

                    await queryInterface.removeColumn(
                        'roles',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'roles',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('roles', { transaction });

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'fileseq',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'casefilename',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'refno',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'refnofilesseq',
                        'clientid',
                        { transaction }
                    );

                    await queryInterface.dropTable('refnofilesseq', { transaction });

                    await queryInterface.removeColumn(
                        'progress',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'progress',
                        'progresstypes',
                        { transaction }
                    );

                    await queryInterface.dropTable('progress', { transaction });

                    await queryInterface.removeColumn(
                        'offices',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'offices',
                        'officetypes',
                        { transaction }
                    );

                    await queryInterface.dropTable('offices', { transaction });

                    await queryInterface.removeColumn(
                        'letterheading',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'desc_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'letterheading',
                        'desc_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('letterheading', { transaction });

                    await queryInterface.removeColumn(
                        'introducers',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'initial',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'introducers',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('introducers', { transaction });

                    await queryInterface.removeColumn(
                        'handlers',
                        'updateby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'updatedate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'createby',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'createdate',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'status',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'initial',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'name_ch',
                        { transaction }
                    );

                    await queryInterface.removeColumn(
                        'handlers',
                        'name_en',
                        { transaction }
                    );

                    await queryInterface.dropTable('handlers', { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
