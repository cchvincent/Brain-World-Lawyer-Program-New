const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const caseheaderreferences = sequelize.define(
    'caseheaderreferences',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      refno: {
        type: DataTypes.TEXT,
      },

      relatedcases: {
        type: DataTypes.TEXT,
      },

      dateofaccident: {
        type: DataTypes.DATEONLY,

        get: function () {
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

      caseprogressid: {
        type: DataTypes.INTEGER,
      },

      clientid: {
        type: DataTypes.INTEGER,
      },

      casefilelocationid: {
        type: DataTypes.INTEGER,
      },

      casetypesid: {
        type: DataTypes.INTEGER,
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

      temprefno: {
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

  caseheaderreferences.associate = (db) => {
    db.caseheaderreferences.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.caseheaderreferences.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return caseheaderreferences;
};
