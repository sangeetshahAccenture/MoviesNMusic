import * as admin from "firebase-admin";
  var config = {
    apiKey: "AIzaSyC2sHbK9kGj-sWGXIpOTXGaNNaWElZMIzM",
    authDomain: "moviesnmusic-dd17f.firebaseapp.com",
    databaseURL: "https://moviesnmusic-dd17f.firebaseio.com",
    storageBucket: "moviesnmusic-dd17f.appspot.com",
    messagingSenderId: "1032697832644"
  };
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "moviesnmusic-dd17f",
    clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
    privateKey: "AIzaSyC2sHbK9kGj-sWGXIpOTXGaNNaWElZMIzM"
  }),
  databaseURL: "https://moviesnmusic-dd17f.firebaseio.com"
});

