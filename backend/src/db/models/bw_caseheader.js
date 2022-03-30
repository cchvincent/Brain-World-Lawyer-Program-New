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

timebar: {
        type: DataTypes.TEXT,

      },

introducers: {
        type: DataTypes.TEXT,

      },

yearofcreation: {
        type: DataTypes.TEXT,

      },

caseno: {
        type: DataTypes.TEXT,

      },

handlers: {
        type: DataTypes.TEXT,

      },

supervisors: {
        type: DataTypes.TEXT,

      },

staffs: {
        type: DataTypes.TEXT,

      },

dla: {
        type: DataTypes.TEXT,

      },

conflictcheck: {
        type: DataTypes.INTEGER,

      },

clientcheck: {
        type: DataTypes.INTEGER,

      },

moneylaundrycompliance: {
        type: DataTypes.TEXT,

      },

status: {
        type: DataTypes.TEXT,

      },

caseprogress: {
        type: DataTypes.INTEGER,

      },

workaccident: {
        type: DataTypes.INTEGER,

      },

liabilityadmitted: {
        type: DataTypes.INTEGER,

      },

remarks: {
        type: DataTypes.TEXT,

      },

followuptasks: {
        type: DataTypes.TEXT,

      },

approvalstatus: {
        type: DataTypes.INTEGER,

      },

createdate: {
        type: DataTypes.DATE,

      },

createby: {
        type: DataTypes.TEXT,

      },

updatedate: {
        type: DataTypes.DATE,

      },

updateby: {
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

