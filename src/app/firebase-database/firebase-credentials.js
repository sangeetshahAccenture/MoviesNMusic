
 var src = require("https://www.gstatic.com/firebasejs/3.7.2/firebase.js");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2sHbK9kGj-sWGXIpOTXGaNNaWElZMIzM",
    authDomain: "moviesnmusic-dd17f.firebaseapp.com",
    databaseURL: "https://moviesnmusic-dd17f.firebaseio.com",
    storageBucket: "moviesnmusic-dd17f.appspot.com",
    messagingSenderId: "1032697832644"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });