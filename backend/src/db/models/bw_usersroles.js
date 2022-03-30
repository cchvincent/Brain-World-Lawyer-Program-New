const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const bw_usersroles = sequelize.define(
    'bw_usersroles',
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

  bw_usersroles.associate = (db) => {

    db.bw_usersroles.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bw_usersroles.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bw_usersroles;
};

