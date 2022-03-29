const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const bw_caseserial = sequelize.define(
    'bw_caseserial',
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

  bw_caseserial.associate = (db) => {

    db.bw_caseserial.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bw_caseserial.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bw_caseserial;
};

