const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const sess = {
    // required to sign the session ID cookie
    secret: 'Mary goes robblin with marigold goblins',
    cookie: { maxAge: null },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

module.exports = sess;