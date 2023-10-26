const {  findTweetsService, createUsersService, loginUsersService, updateBioService, updateTweetService, createTweetService } = require("../services/twitterService");
// const { findTweetsController, createUsersController, loginUsersController, updateBioController, updateTweetController, createTweetController } = require("../controllers/twitterController");


const findTweetsController = async (req, res) => {
    try {
        const {tweet} = req.query
        const result = await findTweetsService(tweet);

        return res.status(200).json({
            message: "success",
            data:result,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
}

const loginUsersController = async (req, res) => {
    try {
        const {username, email, phone_number, password} = req.body
        const result = await loginUsersService(username, email, phone_number, password);

        return res.status(200).json({
            message: "success",
            data:result,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
}


const createUsersController = async (req, res) => {
    try {
        const { email, username, phone_number, password, bio } = req.body;
        console.log("ini console",email);


        const result = await createUsersService(email, username, phone_number, password, bio);

        return res.status(200).json({
            message: "success",
            data: result,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
    }
};


const createTweetController = async (req, res) => {
    try {

        const { userId } = req.query;
        const { tweet } = req.body;

        const result = await createTweetService( userId,tweet );

        return res.status(200).json({
            message: "success",
            data: result,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
    }
};


const updateBioController = async (req, res) => {
    try {
        const {id} = req.params
        const { bio } = req.body;

        const result = await updateBioService(id, bio);

        return res.status(200).json({
            message: "update success",
            // data: result,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
    }
};



const updateTweetController = async (req, res) => {
    try {
        const {id} = req.params
        const { tweet } = req.body;

        const result = await updateTweetService(id, tweet);

        return res.status(200).json({
            message: "update success",
            // data: result,
        });
    } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
    }
};



module.exports = {
    findTweetsController, 
    createUsersController, 
    loginUsersController, 
    updateBioController, 
    updateTweetController, 
    createTweetController
};