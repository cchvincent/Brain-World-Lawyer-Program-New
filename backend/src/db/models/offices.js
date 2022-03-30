const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const offices = sequelize.define(
    'offices',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

officetypes: {
        type: DataTypes.TEXT,

      },

desc_en: {
        type: DataTypes.TEXT,

      },

desc_ch: {
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

  offices.associate = (db) => {

    db.offices.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.offices.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return offices;
};

