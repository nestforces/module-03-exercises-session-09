const { Sequelize } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define(
        "users",
        {
            email: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              username: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              phone_number: {
                type: Sequelize.INTEGER,
                allowNull: false,
              },
              password: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              bio: {
                type: Sequelize.STRING,
                allowNull: false,
              },
        },
            {
                timestamps: false,
                tableName: "users",
            }
    );

    users.associate = (models) => {
        users.hasMany(models.tweets, { foreignKey: "userId" });
    };

    return users;
};