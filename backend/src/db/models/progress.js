const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const progress = sequelize.define(
    'progress',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

progresstypes: {
        type: DataTypes.INTEGER,

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

  progress.associate = (db) => {

    db.progress.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.progress.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return progress;
};

