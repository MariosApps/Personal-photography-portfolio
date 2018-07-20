$(document).ready(function () {


    $(".dropdown-submenu").hover(function () {
        $(this).children('ul.sub').slideDown('fast');
    }, function () {
        $(this).children('ul.sub').slideUp('fast');
    });
    
    
    
    $(".dropdown").hover(function () {
        $(this).children('.dropdown-menu').slideDown('fast');
    }, function () {
        $(this).children('.dropdown-menu').slideUp('fast');
    });


});
