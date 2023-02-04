
const express = require('express');
const multer = require('multer');
const app = express();

const fileupload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "images")
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("data");
app.post("/upload", fileupload, (req, res) => {
    res.send("file uploaded");
})
app.listen(8000);