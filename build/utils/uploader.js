"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeUpload = storeUpload;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

function storeUpload(stream) {
  _cloudinary["default"].config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  return new Promise(function (resolve, reject) {
    var buffer = _cloudinary["default"].v2.uploader.upload_stream(function (err, result) {
      if (err) reject(err);
      resolve(result);
    });

    stream.pipe(buffer);
  });
}

;
//# sourceMappingURL=uploader.js.map