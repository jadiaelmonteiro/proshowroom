const bodyParser = require('body-parser');
const users = require('./usersRoute');
const auth = require('./authRoute');
const uploads = require('./uploadsRoute');
const announcement = require('./announcementsRouter');
const public = require('./publicRouter');

module.exports = app => {
    app.use(
        bodyParser.json(),
        public,
        auth,
        users,
        uploads,
        announcement
    )
}