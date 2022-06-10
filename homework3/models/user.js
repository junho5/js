const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      web_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      web_password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      comment: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      provider: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Thing, { foreignKey: 'user_id', sourceKey: 'id' });
  }
};
