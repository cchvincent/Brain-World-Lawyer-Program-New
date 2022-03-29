const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const filedocs = sequelize.define(
    'filedocs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

refno: {
        type: DataTypes.TEXT,

      },

parentid: {
        type: DataTypes.INTEGER,

      },

docboxname: {
        type: DataTypes.TEXT,

      },

folderpath: {
        type: DataTypes.TEXT,

      },

filename: {
        type: DataTypes.TEXT,

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

  filedocs.associate = (db) => {

    db.filedocs.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.filedocs.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return filedocs;
};

