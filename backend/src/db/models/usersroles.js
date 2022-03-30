const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const usersroles = sequelize.define(
    'usersroles',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

userid: {
        type: DataTypes.INTEGER,

      },

roleid: {
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

  usersroles.associate = (db) => {

    db.usersroles.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.usersroles.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return usersroles;
};

