const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const files = sequelize.define(
    'files',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

filename: {
        type: DataTypes.TEXT,

      },

year: {
        type: DataTypes.INTEGER,

      },

caseno: {
        type: DataTypes.TEXT,

      },

letterheading: {
        type: DataTypes.TEXT,

      },

filedate: {
        type: DataTypes.TEXT,

      },

fileformat: {
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

  files.associate = (db) => {

    db.files.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.files.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return files;
};

