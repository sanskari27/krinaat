//jshint esversion:6


$(".nav-item").mouseenter(function () { 
    let isActive = $(this).hasClass("nav-active");
    let isCart = $(this).hasClass("cart");
    if(!isActive && !isCart)
        $(this).addClass("dot");
}).mouseleave(function () { 
    $(this).removeClass("dot");
}).click(function (e) { 
    $(".nav-item").removeClass("nav-active");
    $(this).addClass("nav-active");
    $(this).removeClass("dot");
});
