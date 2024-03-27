const mongoose = require('mongoose')

MONGO_URL = 'mongodb://127.0.0.1:27017/voting'
// const MONGO_URL = process.env.DB_URL

mongoose.connect(MONGO_URL)

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to database");
});

db.on("disconnected", () => {
  console.log("disconnected database");
});

db.on("error", () => {
  console.log("error accured.");
});

module.exports = db;