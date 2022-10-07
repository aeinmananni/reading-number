require("express-async-errors");
const winston = require("winston");
const express = require("express");
const error = require("./middelwaars/error");
const app = express();

 require("./middelwaars/logger")();
require("./startup/routs")(app);






app.use(error);



const port = process.env.PORT || 3030
app.listen(port , () => winston.info(`Listening On Port : ${port}`))