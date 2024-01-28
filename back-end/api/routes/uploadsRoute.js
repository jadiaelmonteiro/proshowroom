const multer = require('multer');
const storage = require('./multerConfig.js');
const { Router } = require('express');

const router = Router();
const upload = multer({ storage: storage });

router.post("/upload", upload.single('file'), (req, res) => {
    return res.json(req.file.originalname);
});

module.exports = router;