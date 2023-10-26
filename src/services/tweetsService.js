
const {
    findTweetsQuery, 
    updateTweetQuery, 
    createTweetQuery
} = require("../queries/tweetsQuery");

const findTweetsService = async (tweet) => {
    try {
        const res = await findTweetsQuery(tweet);

        return res;
    } catch (err) {
        throw err;
    }
}

const createTweetService = async (userId, tweet) => {
    try {

        const res = await createTweetQuery(userId, tweet);

        return res;
    } catch (err) {
        throw err;
    }
};

const updateTweetService = async (id, tweet) => {
    try {
        // const check = await findUsersQuery({ id });

        // if (!check) throw new Error("Branch doesnt exist");

        const res = await updateTweetQuery(id, tweet);

        // return res;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    findTweetsService, 
    updateTweetService, 
    createTweetService
};