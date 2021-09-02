const multer = require('multer');
const path = require('path');
// define storage for the imgaes
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        console.log("file", file);
        callback(null, './src/public/upload/images');
    },
    filename: (req, file, callback) => {
        const extention = file.originalname.split(".").pop()
        callback(null, `${new Date().getTime()}.${extention}`);
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


