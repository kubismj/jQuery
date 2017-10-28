//  Funkcja document.ready() - wersja skrócona

$(function(){
    'use strict';
    
     $("#first").mouseenter(function() {
         $("#second").toggle(function() {
             
        $(this).css({"background-color" : "yellow", "text-decoration" : "underline"});
             
         });
    });  
    
//    $("#first").click(function() {
//        $(this).css("background-color", "red");
//    });  
//    $("#first").on({
//          "mouseover" : function() {
//            $(this).css("background-color", "yellow")
//        },
//            "mouseleave" : function() {
//            $(this).css("background-color", "green")
//        },
//            "click" : function() {
//            console.log("click click")
//        },
//        
////        dblclick - 
////        mouseover - może zliczać czas kursora nad elementem
//        
//    });
    
});