const converter = require("convert-excel-to-json");

function excelToJson(filepath) {
  const excelData = converter({
    sourceFile: filepath,
    sheets: [
      {
        name: "Products",
        // SKIP HEADER
        header: {
          rows: 1,
        },
        columnToKey: {
          B: "name",
          C: "category",
          D: "image",
          E: "brand",
          F: "price",
          G: "description",
          H: "sku",
        },
      },
    ],
  });

  return excelData;
}

module.exports = excelToJson;
