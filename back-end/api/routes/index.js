const bodyParser = require('body-parser');
const users = require('./usersRoute');
const auth = require('./authRoute');
const uploads = require('./uploadsRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        users,
        uploads
    )
}