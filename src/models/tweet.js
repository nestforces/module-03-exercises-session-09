const { Sequelize } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const tweets = sequelize.define(
        "tweets",
        {
            tweet: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        },
            {
                timestamps: true,
                tableName: "tweets",
            }
    );

    tweets.associate = (models) => {
        tweets.belongsTo(models.users, { foreignKey: "userId" });
    };

    return tweets;
};