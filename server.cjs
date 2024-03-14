"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));
// Redirect all routes to index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
