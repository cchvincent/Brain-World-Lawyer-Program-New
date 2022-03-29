const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const clients = sequelize.define(
    'clients',
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

address_en: {
        type: DataTypes.TEXT,

      },

address_ch: {
        type: DataTypes.TEXT,

      },

contactno: {
        type: DataTypes.TEXT,

      },

contactperson_en: {
        type: DataTypes.TEXT,

      },

contactperson_ch: {
        type: DataTypes.TEXT,

      },

mobile: {
        type: DataTypes.TEXT,

      },

hkic: {
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

  clients.associate = (db) => {

    db.clients.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.clients.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return clients;
};

