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
