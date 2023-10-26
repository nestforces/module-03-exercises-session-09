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


const loginUsersQuery = async (username = null, email = null, phone_number = null, password) => {
    try {
        const params = {};
        if (email) params.email = email;
        if (username) params.username = username;
        if (phone_number) params.phone_number = phone_number;

        const res = await users.findAll({
            where: {
                ...params,
                password,
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

const findUsersQuery = async ({username = null, email = null, phone_number = null}) => {
    try {
        console.log(username, email, phone_number)
        const params = {};
        if (email) params.email = email;
        if (username) params.username = username;
        if (phone_number) params.phone_number = phone_number;

        const res = await users.findAll({
            where: {
                ...params,
            },
        });
        console.log(res)
        return res;
    } catch (err) {
        throw err;
    }
};



const createUsersQuery = async ( email, username, phone_number, password, bio = " ") => {
    const t = await db.sequelize.transaction();

    try {
        console.log(password)
        const res = await users.create({
             email, username, phone_number, password, bio
        },
        { transaction: t});

        await t.commit();
        return res;
    } catch (err) {
        await t.rollback();
        throw err;
    }
};





const updateBioQuery = async (id, bio) => {
    try {
        await db.sequelize.transaction(async (t) => {
            await users.update({
                bio
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
    // findTweetsQuery,
    findUsersQuery, 
    createUsersQuery, 
    loginUsersQuery, 
    updateBioQuery, 
    // updateTweetQuery, 
    // createTweetQuery
};
