
var firebaseConfig = {
    apiKey: "AIzaSyCp5QoHWnUTKdqp_gQSuCDjsB0YnzM5AXQ",
    authDomain: "krinaat-web.firebaseapp.com",
    projectId: "krinaat-web",
    storageBucket: "krinaat-web.appspot.com",
    messagingSenderId: "947589267202",
    appId: "1:947589267202:web:c5256ed49ed46c5cf1cc1b",
    measurementId: "G-L10E5L1EF2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

$("#send-msg").click(function (e) { 
    let email = $("#email").val();
    let msg = $("#message").val();
    $("#email").val("");
    $("#message").val("");
    firestore.collection("messages").add({
        email_id : email,
        message : msg 
    });

});
