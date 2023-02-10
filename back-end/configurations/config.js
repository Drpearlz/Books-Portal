require("dotenv").config();
const Sequelize = require('sequelize');

const SQL_DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(SQL_DB_URL);
// Sequelize('books_portal', 'root', 'root', {
//     host: "localhost",
//     dialect: 'mysql'});
// const path = 'mysql://root:rootr@localhost:8889/seq1';

module.exports = sequelize;