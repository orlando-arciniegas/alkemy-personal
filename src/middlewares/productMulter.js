const multer = require('multer');
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "./public/img/images")
    },
    filename: function (req, file, cb) {
    const newFilename = req.body.name + '-' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
    }
});
const upload = multer({storage});

module.exports = upload;