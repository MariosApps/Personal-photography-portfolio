$(document).ready(function(){
    
  $('.dropdown-submenu a.test').mouseenter(function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
    
    
//    $('.dropdown-submenu a.test').mouseout(function(e){
//    $(this).next('ul').toggle();
//    e.preventDefault();
//  });
//    
});