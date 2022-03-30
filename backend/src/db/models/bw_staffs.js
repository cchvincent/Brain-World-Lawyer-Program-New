const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const bw_staffs = sequelize.define(
    'bw_staffs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

name_en: {
        type: DataTypes.TEXT,

      },

name_ch: {
        type: DataTypes.TEXT,

      },

initial: {
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

  bw_staffs.associate = (db) => {

    db.bw_staffs.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bw_staffs.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bw_staffs;
};

