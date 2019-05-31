$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#Beaut").offset().top
        }, 2000);
    });
});