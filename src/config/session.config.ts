/* eslint-disable no-console */

const MongoDBStore = require('connect-mongodb-session')(
  require('express-session'),
);

const store = new MongoDBStore({
  uri: process.env.DATABASE_URI,
  collection: process.env.DATABASE_COLLECTION,
});

store.on('error', (error: any) => console.log(error));

const {
  SESS_NAME = 'sid',
  SESS_SECRET = "ssh!yourenotsupposedtoseeit'itsasecret!",
} = process.env;

export default {
  name: SESS_NAME,
  resave: true,
  saveUnitialized: true,
  unset: 'destroy',
  secret: SESS_SECRET,
  store,
};
