const accountinfo = require("../models/accountInformations");
const account = require("../models/accounts");

exports.createAccountInfo = async (req, res) => {
    console.log(req.query);
    let verify = await account.account.findAll({
        where: {
            id: req.query.accountid
        }
    });
    if (verify.length > 0){
        let data = await accountinfo.accountinformation.create({
            account_id: req.query.accountid,
            firstName: req.query.firstname,
            lastName: req.query.lastname,
            address: req.query.address
        });
        res.send(data)
    }else{
        res.send("Does not exist");
    }
}