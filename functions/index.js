const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

//import functions
const {
    getAllScreams,
    postOneScream
  } = require('./handlers/screams');

  const {
    signup,
    login,
    uploadImage
  } = require('./handlers/users');
  

//gets all the screams from the firestore
// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);


// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user', FBAuth, addUserDetails);
app.post('/user/image', FBAuth, uploadImage);


//serves from base url => https:baseUrl.com/api
exports.api = functions.region('europe-west1').https.onRequest(app);