$(document).ready(function(){   
       $("a[href^='#']").click(function(){
                let _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top - 50 +"px"});
                return false;
        });
$(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();

               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           }); 



  $('.image-link').magnificPopup({type:'image'});
    
    
 
    
});