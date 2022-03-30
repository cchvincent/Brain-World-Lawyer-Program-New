const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const bw_caseheader = sequelize.define(
    'bw_caseheader',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

timebar: {
        type: DataTypes.DATEONLY,

        get: function() {
          return this.getDataValue('timebar')
            ? moment
                .utc(this.getDataValue('timebar'))
                .format('YYYY-MM-DD')
            : null;
        },

      },

conflictcheck: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

clientcheck: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

moneylaundrycompliance: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

workaccident: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

liabilityadmitted: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

approvalstatus: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

dla: {
        type: DataTypes.ENUM,

        values: [

"Yes",

"No"

        ],

      },

createdate: {
        type: DataTypes.DATE,

      },

updatedate: {
        type: DataTypes.DATE,

      },

refno: {
        type: DataTypes.TEXT,

      },

temprefno: {
        type: DataTypes.TEXT,

      },

relatedcases: {
        type: DataTypes.TEXT,

      },

dateofaccident: {
        type: DataTypes.DATEONLY,

        get: function() {
          return this.getDataValue('dateofaccident')
            ? moment
                .utc(this.getDataValue('dateofaccident'))
                .format('YYYY-MM-DD')
            : null;
        },

      },

yearofcreation: {
        type: DataTypes.TEXT,

      },

caseno: {
        type: DataTypes.TEXT,

      },

remarks: {
        type: DataTypes.TEXT,

      },

followuptasks: {
        type: DataTypes.TEXT,

      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  bw_caseheader.associate = (db) => {

    db.bw_caseheader.belongsToMany(db.bw_introducers, {
      as: 'introducers',
      constraints: false,
      through: 'bw_caseheaderIntroducersBw_introducers',
    });

    db.bw_caseheader.belongsToMany(db.bw_handlers, {
      as: 'handlers',
      constraints: false,
      through: 'bw_caseheaderHandlersBw_handlers',
    });

    db.bw_caseheader.belongsToMany(db.bw_supervisors, {
      as: 'supervisors',
      constraints: false,
      through: 'bw_caseheaderSupervisorsBw_supervisors',
    });

    db.bw_caseheader.belongsToMany(db.bw_staffs, {
      as: 'staffs',
      constraints: false,
      through: 'bw_caseheaderStaffsBw_staffs',
    });

    db.bw_caseheader.belongsTo(db.bw_progress, {
      as: 'caseprogress',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.bw_casestatus, {
      as: 'status',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.users, {
      as: 'createby',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.users, {
      as: 'updateby',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.bw_casetypes, {
      as: 'casetypesid',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.bw_progress, {
      as: 'progressid',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.bw_offices, {
      as: 'casefilelocationid',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.bw_clients, {
      as: 'clientid',
      constraints: false,
    });

    db.bw_caseheader.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bw_caseheader.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bw_caseheader;
};

