//  Funkcja document.ready() - wersja skrócona

$(function() {
    'use strict';
    
//    $("#first").hide(3000).show(1000);
    
//    $("#first").fadeOut(3000).fadeIn(1000);
        
//    $("#first").slideUp(3000).slideDown(1000);
    
    
    function callbackZwrotny() {
        console.log("Zakończono pierwszą animację. Uwaga! Startuje druga! :)");
        $("#first").animate({"font-size" : "1em", "margin-left" : "250px"}, 3000);
    };
    
//    callbackZwrotny();
    
    $("#first").animate({"font-size" : "4em", "margin-left" : "250px"}, 3000, callbackZwrotny);
    
    
    
});