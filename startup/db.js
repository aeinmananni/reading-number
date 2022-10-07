const sql = require("mssql/msnodesqlv8");

const config = {
    database:"UniDB",
    server:"DESKTOP-O080PDM",
    options:{
        trustedConnection:true
    }
}

const runQuery = async query =>{
    try{
         let pool = await sql.connect(config);
         let result = await pool.request().query(query); 

        await sql.close();
        return result;

    }catch(error){
        return error
    }
}

module.exports.runQuery=runQuery;