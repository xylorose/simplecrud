const express = require("express");
const app = express();
const accountRoute = require("./modules/accounts/routes/accountRoutes");
const accountInfoRoute = require("./modules/accounts/routes/accountInfoRoutes");

app.use("/accounts", accountRoute);
app.use("/accountinformation", accountInfoRoute);

app.listen(3000);