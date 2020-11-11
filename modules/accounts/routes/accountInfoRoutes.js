const express = require("express");
const router = express.Router();
const accountInformationController = require("../controllers/accountInformationController");

router.post("/create", accountInformationController.createAccountInfo);

module.exports = router;