const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase 1!");
   });
exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase 2!");
   });
exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase 3!");
   });
         