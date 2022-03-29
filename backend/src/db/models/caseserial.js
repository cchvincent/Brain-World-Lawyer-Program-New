const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const caseserial = sequelize.define(
    'caseserial',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      serialcode: {
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

  caseserial.associate = (db) => {
    db.caseserial.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.caseserial.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return caseserial;
};
