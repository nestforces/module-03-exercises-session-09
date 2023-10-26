const { findTweetsService, updateTweetService, createTweetService  } = require("../services/tweetsService")

const findTweetsController = async (req, res) => {
    try {
        // const {id} = req.params
        const result = await findTweetsService();

        return res.status(200).json({
            message: "success",
            data:result,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
}

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
    updateTweetController, 
    createTweetController
};