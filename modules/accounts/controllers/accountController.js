const account = require("../models/accounts");
exports.createAccount = async (req, res) => {
    let data = await account.account.create({
        username: req.query.username,
        password: req.query.password
    })
    res.send(data);
}