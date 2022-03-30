const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const refnofilesseq = sequelize.define(
    'refnofilesseq',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

clientid: {
        type: DataTypes.INTEGER,

      },

refno: {
        type: DataTypes.TEXT,

      },

casefilename: {
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

  refnofilesseq.associate = (db) => {

    db.refnofilesseq.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.refnofilesseq.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return refnofilesseq;
};

