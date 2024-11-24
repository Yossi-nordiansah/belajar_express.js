"use strict";

var _express = _interopRequireDefault(require("express"));
var _supertest = _interopRequireDefault(require("supertest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(3000, function () {
  return console.log("server running on port 3000");
});