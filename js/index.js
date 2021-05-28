//jshint esversion:6

let docName = document.title;
if(docName === )

$(".nav-item").mouseenter(function () { 
    let isActive = $(this).hasClass("nav-active");
    let isCart = $(this).hasClass("cart");
    if(!isActive && !isCart)
        $(this).addClass("dot");
}).mouseleave(function () { 
    $(this).removeClass("dot");
});
