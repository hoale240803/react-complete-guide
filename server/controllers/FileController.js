const {
  uploadFileMiddleware,
  uploadImageMiddleware,
} = require("../middleware/FileUpload");
const fs = require("fs");

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
  const directoryPath = global.__dirname + "/resources/static/assets/upload/";
  try {
    fs.readdir(directoryPath, function (err, files) {
      if (err)
        res.status(500).send({ message: `Something Wrong!. Error ${err}` });

      let tempFiles = [];

      tempFiles.forEach((file) => {
        tempFiles.push({
          name: file,
          url: baseUrl + file,
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

const downloadFile = (req, res) => {
  try {
    const filename = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    const destinationFile = directoryPath + filename;
    res.download(destinationFile, filename, (error) => {
      if (error)
        res
          .status(500)
          .send({ message: "Could not download the file. Something wrong!" });
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
};

module.exports = {
  handleUploadFile,
  handleUploadImage,
  getFiles,
  downloadFile,
};
