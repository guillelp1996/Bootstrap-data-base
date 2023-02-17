"use strict"
require("dotenv").config();
const {DATABASE_NAME} = process.env
const getPool = require("./getPool");

const bootstrapDB= async ()=>{
    try {
        let pool=getPool();

        console.log("Creating Database...\n\t")

        await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME}`);
        await pool.query(`CREATE DATABASE ${DATABASE_NAME}`);
        await pool.query(`USE ${DATABASE_NAME}`);

        console.log(`Database '${DATABASE_NAME}' created...\n`)

    } catch (error) {
        console.log(error);
    } finally {
        console.log("happy Hacking!\n")
        process.exit();
    }
}

bootstrapDB();