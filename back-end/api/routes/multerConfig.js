const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
        const time = new Date().getTime();

        callback(null, `${time}_${file.originalname}`);
    },
});

module.exports = storage;