const multer = require('multer');
const path = require('path');
// define storage for the imgaes
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './src/public/upload/images');
    },
    filename: (req, file, callback) => {
        // console.log(file);
        callback(null, file.originalname);
    }
});
// // upload parameter for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    }
});
module.exports = upload;


