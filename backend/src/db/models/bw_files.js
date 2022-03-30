const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const bw_files = sequelize.define(
    'bw_files',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

casefilename: {
        type: DataTypes.TEXT,

      },

caseyear: {
        type: DataTypes.INTEGER,

      },

documentboxid: {
        type: DataTypes.INTEGER,

      },

documentboxname: {
        type: DataTypes.TEXT,

      },

refno: {
        type: DataTypes.TEXT,

      },

caseno: {
        type: DataTypes.TEXT,

      },

letterheading: {
        type: DataTypes.TEXT,

      },

filefreetext: {
        type: DataTypes.TEXT,

      },

fileseq: {
        type: DataTypes.INTEGER,

      },

status: {
        type: DataTypes.TEXT,

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

  bw_files.associate = (db) => {

    db.bw_files.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bw_files.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bw_files;
};

