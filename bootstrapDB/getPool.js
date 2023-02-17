"use strict"
require("dotenv").config();
const mysql = require("mysql2");

const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_PASSWORD,
    DATABASE_USER
}= process.env;

let pool;

const getPool=()=>{
    if(!pool){
        pool = mysql.createPool({
            host: DATABASE_HOST,
            port: DATABASE_PORT,
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            timezone: "Z",
            connectionLimit: 10,
          });
    };
    return pool;
};

module.exports = getPool;
