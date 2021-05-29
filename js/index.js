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
}else if(docName.indexOf("Services") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[1]);
    $($nav[2]).addClass("nav-active");
    $($nav[2]).removeClass("dot");
}else if(docName.indexOf("About us") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[1]);
    $($nav[3]).addClass("nav-active");
    $($nav[3]).removeClass("dot");
}else if(docName.indexOf("Contact us") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[1]);
    $($nav[4]).addClass("nav-active");
    $($nav[4]).removeClass("dot");
}else if(docName.indexOf("Cart") !=-1){
    $nav = $(".nav-item");
    $nav.removeClass("nav-active");
    console.log($nav[1]);
    $($nav[5]).addClass("nav-active");
    $($nav[5]).removeClass("dot");
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
    $(".nav-item").removeClass("nav-active");
    $(this).addClass("nav-active");
    $(this).removeClass("dot");
    let tar_get = $(this).text();
    if(tar_get.indexOf("Home") !=-1){        
        window.location.href="/";
    }else if(tar_get.indexOf("Pricing") !=-1){        
        window.location.href="pricing.html";
    }else if(tar_get.indexOf("Services") !=-1){        
        window.location.href="services.html";
    }else if(tar_get.indexOf("About Us") !=-1){
        window.location.href="about-us.html";
    }else if(tar_get.indexOf("Contact Us") !=-1){        
        window.location.href="contact-us.html";
    }else if(isCart){
        window.location.href="cart.html";
    }
});



$("#explore-now-btn").click(function(){
    window.location.href="services.html";
});