// Only change the firebaseConfig variables
// Put in your api Keys here.
var firebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
};

firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref("live/code/");