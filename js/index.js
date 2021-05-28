//jshint esversion:6

let docName = document.title;
if(docName.indexOf("Home") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[0]);
    $($nav[0]).addClass("nav-active");
    $($nav[0]).removeClass("dot");
}else if(docName.indexOf("Pricing") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[1]);
    $($nav[1]).addClass("nav-active");
    $($nav[1]).removeClass("dot");
}

$(".nav-item").mouseenter(function () { 
    let isActive = $(this).hasClass("nav-active");
    let isCart = $(this).hasClass("cart");
    if(!isActive && !isCart)
        $(this).addClass("dot");
}).mouseleave(function () { 
    $(this).removeClass("dot");
}).click(function (e) { 
    let isCart = $(this).hasClass("cart");
    if( !isCart){
        $(".nav-item").removeClass("nav-active");
        $(this).addClass("nav-active");
        $(this).removeClass("dot");
    }
});



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