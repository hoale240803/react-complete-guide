const multer = require("multer");
const utils = require("util");
const path = require("path");
const FILE_CONSTANTS = require("../constants/File");

let fileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/resources/static/assets/upload/documents");
  },
  filename: (req, file, callback) => {
    var ext = path.extname(file.originalname);
    if (ext !== ".pdf") {
      return callback(new Error("Only PDF file allowed"));
    }
    // IDENTIFY TYPE OF FILE
    var filetype = "";
    switch (file.mimetype) {
      case "image/gif":
        filetype = "gif";
        break;
      case "image/png":
        filetype = "png";
        break;
      case "image/jpeg":
        filetype = "jpeg";
        break;
      default:
        filetype = "unknown";
        break;
    }
    // NAME OF FILE SHOULD BE ABC_20200612_png_nameOfFile
    callback(
      null,
      file.fieldname +
        "_" +
        Date.now() +
        "_" +
        filetype +
        "_" +
        file.originalname
    );
  },
});
let imageStorage = multer.diskStorage({
  destination: (req, image, callback) => {
    callback(null, __basedir + "/resources/static/assets/upload/images");
  },
  filename: (req, image, callback) => {
    console.log("MULTER FILER >>>>>", req.image);
    var ext = path.extname(image.originalname);

    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    // IDENTIFY TYPE OF FILE
    var filetype = "";
    switch (image.mimetype) {
      case "image/gif":
        filetype = "gif";
        break;
      case "image/png":
        filetype = "png";
        break;
      case "image/jpeg":
        filetype = "jpeg";
        break;
      default:
        filetype = "unknown";
        break;
    }

    // NAME OF FILE SHOULD BE ABC_20200612_png_nameOfFile
    callback(
      null,
      image.fieldname +
        "_" +
        Date.now() +
        "_" +
        filetype +
        "_" +
        image.originalname
    );
  },
});

let excelStorage = multer.diskStorage({
  destination: (req, excelFile, callback) => {
    callback(null, __basedir + "/resources/static/assets/upload/products");
  },
  filename: (req, excelFile, callback) => {
    console.log("");
    var ext = path.extname(excelFile.originalname);
    if (ext !== ".xlsx") {
      return callback(new Error("Only PDF file allowed"));
    }
    // IDENTIFY TYPE OF FILE
    var filetype = "";
    switch (excelFile.mimetype) {
      case "application/xlsx":
        filetype = "xlsx";
        break;
      default:
        filetype = "unknown";
        break;
    }
    // NAME OF FILE SHOULD BE ABC_20200612_png_nameOfFile
    callback(
      null,
      excelFile.fieldname +
        "_" +
        Date.now() +
        "_" +
        filetype +
        "_" +
        excelFile.originalname
    );
  },
});

let uploadFile = multer({
  storage: fileStorage,
  limits: { fileSize: FILE_CONSTANTS.MAX_SIZE_FILE },
}).single("file");

let uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: FILE_CONSTANTS.MAX_SIZE_IMAGE },
}).single("image");

let uploadExcel = multer({
  storage: excelStorage,
  limits: { fileSize: FILE_CONSTANTS.MAX_SIZE_FILE },
}).single("excelFile");

let uploadFileMiddleware = utils.promisify(uploadFile);
let uploadImageMiddleware = utils.promisify(uploadImage);
let uploadExcelMiddleware = utils.promisify(uploadExcel);
module.exports = {
  uploadFileMiddleware,
  uploadImageMiddleware,
  uploadExcelMiddleware,
};
