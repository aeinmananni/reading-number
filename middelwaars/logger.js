const winston = require("winston");
const utils = require("./../tools/utils");


module.exports = () =>{
    const currentTime = utils.getCurrentTime();
    const currentDate = utils.getCurrentPersianDateWithoutSlash();
    
    winston.add(new winston.transports.Console());
    winston.add(
        new winston.transports.File({
            filename : `logs/APINumber-${currentDate}-${currentTime}.log`
        
        }));


}