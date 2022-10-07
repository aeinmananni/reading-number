const express = require("express");
const router = express.Router();
const {runQuery} = require("./db");

module.exports = router;

router.get("/:number",async(req,res,next) =>{
  
    const numbers = req.params.number
    const result = await runQuery(`EXEC API.NumToTextAPI ${BigInt(numbers)}`)

    res.send(result.recordset[0])
 
}
);