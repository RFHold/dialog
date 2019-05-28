'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    user: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    }
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Member, {
      foreignKey: 'group',
      constraints: true
    });
    this.hasMany(models.Channel, {
      foreignKey: 'group',
      constraints: true
    });
    this.hasMany(models.Message, {
      foreignKey: 'group',
      constraints: true
    });
    
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true
    });
  };
  return Group;
};