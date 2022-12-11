  const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "admin",
     password: "pass",
     database: "test",
     host: "localhost",
     port: "5432"
 });
 
 module.exports = pool;