const express = require("express");
const app = express();
const initAPIs = require("./routes/api");
// const logger = require("morgan");
const mongoose = require("mongoose");

//ADD OTHER MIDDLEWARE
const cors = require("cors");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//SET UP ENV VARIABLES
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `config/${process.env.NODE_ENV}.env`),
});

const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT;
global.__basedir = __dirname;

var corsOptions = {
  origin: process.env.BASE_URL,
};
process.env.Node;

app.use(cors(corsOptions));

console.log("NODE_ENV>>>>", process.env.NODE_ENV);
console.log("ENV __dirname", __dirname);

console.log("ENV PORT", process.env.PORT);

console.log("ENV BASE_URL", process.env.BASE_URL);

console.log("ENV DB URL", process.env.MONGO_URL);

console.log("ENV TEST", process.env.TEST);

mongoose
  .connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });
app.use(express.json());
initAPIs(app);

app.listen(PORT, () => {
  console.log(`Hello HoaL, I'm running at http://localhost:${PORT}/`);
});
