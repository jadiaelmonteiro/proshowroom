const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(cors());
routes(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app