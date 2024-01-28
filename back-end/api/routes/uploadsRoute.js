const multer = require('multer');
const storage = require('./multerConfig.js');
const { Router } = require('express');

const router = Router();
const upload = multer({ storage: storage });

router.post("/upload", upload.single('file'), (req, res) => {
    const file = req.file;
    return res.json(file.path);
});

module.exports = router;