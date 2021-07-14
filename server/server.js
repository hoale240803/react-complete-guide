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
let PORT = process.env.PORT || 5000;
// console.log(process.env);
// set up dotenv

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
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/hoa_meals", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
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

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  app.use(express.static("client/build"));
}
// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
app.listen(PORT, () => {
  console.log(`Hello HoaL, I'm running at http://localhost:${PORT}/`);
});
