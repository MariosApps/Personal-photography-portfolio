$(document).ready(function(){
    
  $('.dropdown-submenu a.test').mouseover(function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
  });
    
    
    $('.dropdown-submenu a.test').mouseout(function(e){
    $(this).next('ul').toggle();
    e.preventDefault();
  });
    
});