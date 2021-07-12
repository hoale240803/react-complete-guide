/**
 * Created by HoaL
 * src/server.js
 */
const express = require("express");
const app = express();
const initAPIs = require("./src/routes/api");
const logger = require("morgan");

// Cho phép các api của ứng dụng xử lý dữ liệu từ body của request
app.use(express.json());

// Khởi tạo các routes cho ứng dụng
initAPIs(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 5000;
app.listen(port, () => {
  console.log(`Hello HoaL, I'm running at localhost:${port}/`);
});
