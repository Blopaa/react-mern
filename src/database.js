const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const conection = mongoose.connection;

conection.once("open", () => {
  console.log("DB is connected");
});
