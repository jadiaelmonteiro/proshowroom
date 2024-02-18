const bodyParser = require('body-parser');
const users = require('./usersRoute');
const auth = require('./authRoute');
const uploads = require('./uploadsRoute');
const announcement = require('./announcementsRouter');

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        users,
        uploads,
        announcement
    )
}