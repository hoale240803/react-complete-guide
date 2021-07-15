/**
 * Created by HoaL
 * src/server.js
 */

const express = require("express");
const app = express();
const initAPIs = require("./routes/api");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// console.log(process.env);
// set up dotenv

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// set up mongoose
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
// LOCAL
// mongoose
//   .connect("mongodb://localhost/hoalmeal")
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((error) => {
//     console.log("Error connecting to database");
//   });
mongoose
  .connect("mongodb://mongo:27017/hoa_meals")
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });
// Cho phép các api của ứng dụng xử lý dữ liệu từ body của request
app.use(express.json());

// Khởi tạo các routes cho ứng dụng
initAPIs(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 5000;
app.listen(port, () => {
  console.log(`Hello HoaL, I'm running at http://localhost:${port}/`);
});
