
const { 
    findUsersQuery,
    createUsersQuery, 
    loginUsersQuery, 
    updateBioQuery
} = require("../queries/twitterQuery");


const loginUsersService = async (username, email, phone_number, password) => {
    try {
        const res = await loginUsersQuery(username, email, phone_number, password);

        return res;
    } catch (err) {
        throw err;
    }
}



const createUsersService = async (email, username, phone_number, password, bio) => {
    try {
        const check = await findUsersQuery({ email, username, phone_number });
        

        if (check.length > 0) throw new Error("email or username or phone number already exist");

        console.log(password);
        const res = await createUsersQuery(email, username, phone_number, password, bio);

        return res;
    } catch (err) {
        throw err;
    }
};


const updateBioService = async (id, bio) => {
    try {
        // const check = await findUsersQuery({ id });

        // if (!check) throw new Error("Branch doesnt exist");

        const res = await updateBioQuery(id, bio);

        // return res;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    createUsersService, 
    loginUsersService, 
    updateBioService, 
};