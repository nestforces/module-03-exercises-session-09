// findTweetsQuery, 
// createUsersQuery, 
// loginUsersQuery, 
// updateBioQuery, 
// updateTweetQuery, 
// createTweetQuery

const db = require("../models");
const users = db.users;
const tweets = db.tweets;
const {Op} = require("sequelize");
const { sequelize } = require("../models");

const findTweetsQuery = async () => {
    try {
        const params = {};

        const res = await tweets.findAll();
        console.log(res)
        return res;
    } catch (err) {
        throw err;
    }
};


const createTweetQuery = async ( userId, tweet) => {
    const t = await db.sequelize.transaction();


    try {
        console.log(userId)
        const res = await tweets.create({
             userId, tweet
        },
        { transaction: t});

        await t.commit();
        return res;
    } catch (err) {
        await t.rollback();
        throw err;
    }
};


const updateTweetQuery = async (id, tweet) => {
    try {
        await db.sequelize.transaction(async (t) => {
            await tweets.update({
                tweet
            }, {
                    where: {
                        id: id
                    }
                });
        })

    } catch (err) {
        throw err;
    }
};



module.exports = {
    findTweetsQuery,
    // updateBioQuery, 
    updateTweetQuery, 
    createTweetQuery
};
