const winston = require("winston");
const utils = require("./../tools/utils");

module.exports =(err,req,res,next) =>{
   const {method , url } = req;
    const currentTime = utils.getCurrentTime();
    const currentDate = utils.getCurrentPersianDateWithoutSlash();
    
    const errorObject = {
        logTime : currentTime,
        logDate : currentDate,
        method,
        url, 
        ERROR : "لطفا ورودی را چک کنید باید عدد وارد شود"}

    winston.error(errorObject);
    res.status(500).send(errorObject);
}

   
