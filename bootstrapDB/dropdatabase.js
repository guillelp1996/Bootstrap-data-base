"use strict"
require("dotenv").config();
const {DATABASE_NAME}= process.env;
const getPool = require("./getPool");

const dropDB = async ()=>{
    try {
        const pool = getPool();
        await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);
        console.log(`Database: ${DATABASE_NAME} was removed`);
    } catch (error) {
        console.log(error)
    }finally{
        process.exit()
    }
}

dropDB()