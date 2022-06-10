const Sequelize = require('sequelize');

module.exports = class Thing extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stock: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'thing',
      tableName: 'things',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Thing.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
  }
};

