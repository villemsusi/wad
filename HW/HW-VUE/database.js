const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "K2sn2K2ll3",
    database: "testWad",
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "author" varchar(200),
	    "title" VARCHAR(200),
	    "body" VARCHAR(200)
    );`;
const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL PRIMARY KEY,         
	    "name" VARCHAR(200),
	    "email" VARCHAR(200),
        "password" VARCHAR(200)  
    );`;



// A function to execute the previous query
execute(createPostTblQuery).then(result => {
    if (result) {
        console.log('Initialized posts table');
    }
});
execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('Initialized users table');
    }
});

module.exports = pool;