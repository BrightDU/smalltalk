const admin = require('firebase-admin');

//initializes a new application instance
admin.initializeApp();

//database(firestore)
const db = admin.firestore();

//exports admin and db
module.exports = { admin, db };