
$(document).ready(function () {
   $('.hvr-img div').click(function(){
       $(this).css({
         "background-color" : "rgba(0, 0, 0, 0.5)", 
         " align-items": "center",
         "color":"rgb(255, 255, 255)"
         });
       
       $(this).parent().siblings().find('div').css({
         "background-color" : "rgba(0, 0, 0, 0.0)", 
         " align-items": "center",
         "color":"rgba(0, 0, 0, 0.0)" 
       })
       
//       $('.hvr-img img').fadeOut();
//       alert('123');
   });
    
    $('.hvr-img div').hover(function(){
        $(this).css({
         "background-color" : "rgba(0, 0, 0, 0.5)", 
         " align-items": "center",
         "color":"rgb(255, 255, 255)"
         });
        $(this).parent().siblings().find('div').css({
         "background-color" : "rgba(0, 0, 0, 0.0)", 
         " align-items": "center",
         "color":"rgba(0, 0, 0, 0.0)" 
       })
    });
    
});

