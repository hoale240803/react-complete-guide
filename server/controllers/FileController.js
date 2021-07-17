const {
  uploadFileMiddleware,
  uploadImageMiddleware,
  uploadExcelMiddleware,
} = require("../middleware/FileUpload");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const products = require("../models/product");
const excelToJson = require("../utils/files/Excel");

const handleUploadFile = async (req, res) => {
  try {
    await uploadFileMiddleware(req, res, function (err) {
      if (err) {
        res.status(400).send({
          message: `Something wrong!. ${err}`,
        });
        return;
      }
      res.status(200).send({
        message: "Uploaded the file successfully: ",
      });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
};

const handleUploadImage = async (req, res) => {
  try {
    await uploadImageMiddleware(req, res, function (err) {
      if (err) {
        res.status(400).send({
          message: `Something wrong!. ${err}`,
        });
        return;
      }
      res.status(200).send({
        message: "Uploaded the file successfully: ",
      });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
};

const getFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/upload/documents";
  try {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({ message: `Something Wrong!. Error ${err}` });
        return;
      }

      let tempFiles = [];

      files.forEach((file) => {
        tempFiles.push({
          name: file,
          //normalize():: trailing slash, it is preserved. On Windows backslashes are used.
          url: path.normalize(
            __basedir + "/resources/static/assets/upload/documents" + file
          ),
        });
      });
      res.status(200).send(tempFiles);
    });
  } catch (error) {
    res.status(500).send({
      message: `Something wrong!. ${error}`,
    });
  }
};

const getImages = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/upload/images";
  try {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({ message: `Something Wrong!. Error ${err}` });
        return;
      }

      let tempFiles = [];

      files.forEach((file) => {
        tempFiles.push({
          name: file,
          //normalize():: trailing slash, it is preserved. On Windows backslashes are used.
          url: path.normalize(
            __basedir + "/resources/static/assets/upload/images" + file
          ),
        });
      });
      res.status(200).send(tempFiles);
    });
  } catch (error) {
    res.status(500).send({
      message: `Something wrong!. ${error}`,
    });
  }
};
// TEST NOTICE FULL FILE NAME 'XXX.png'
const downloadFile = (req, res) => {
  const fileNameReq = req.params.name;
  try {
    const fullFilename = path.basename(fileNameReq);
    console.log("FILENAME", fullFilename);
    const directoryPath =
      __basedir + "/resources/static/assets/upload/documents/";
    const destinationFile = path.normalize(directoryPath + fullFilename);
    res.download(destinationFile, fullFilename, (error) => {
      if (error)
        res
          .status(500)
          .send({ message: "Could not download the file. Something wrong!" });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
};

const downloadImage = (req, res) => {
  const fileNameReq = req.params.name;
  try {
    const fullFilename = path.basename(fileNameReq);
    console.log("FILENAME", fullFilename);
    const directoryPath = __basedir + "/resources/static/assets/upload/images/";
    const destinationFile = path.normalize(directoryPath + fullFilename);
    res.download(destinationFile, fullFilename, (error) => {
      if (error)
        res
          .status(500)
          .send({ message: "Could not download the file. Something wrong!" });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
};

const handleUploadExcel = async (req, res) => {
  try {
    await uploadExcelMiddleware(req, res);

    if (req.file.filename === null) {
      res.status(400).send({
        message: `PLEASE CHOOSE ONE FILE!`,
      });
    }
    const absoluteFilePath = path.normalize(
      __basedir +
        "/resources/static/assets/upload/products/" +
        req.file.filename
    );
    const excelData = excelToJson(absoluteFilePath);
    fs.unlinkSync(absoluteFilePath);

    return products.insertMany(excelData.Products).then(() => {
      console.log("INSERTED LIST OF PRODUCT SUCCESSFULLY");
      return res.status(200).json({
        success: true,
        message: "INSERTED LIST OF PRODUCT SUCCESSFULLY",
      });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
  }
};

module.exports = {
  handleUploadFile,
  handleUploadImage,
  handleUploadExcel,
  getImages,
  getFiles,
  downloadFile,
  downloadImage,
};
