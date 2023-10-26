const { createUsersService, loginUsersService, updateBioService} = require("../services/twitterService");





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







module.exports = { 
    createUsersController, 
    loginUsersController, 
    updateBioController
};