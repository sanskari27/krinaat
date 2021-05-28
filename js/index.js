//jshint esversion:6


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
