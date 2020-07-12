jQuery(document).ready(function($) {

    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('scroll', function() {
//        var y_scroll_pos = window.pageYOffset;
//        var scroll_pos_test = 900;

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

//$(document).ready(function() {
//    
//    /* Every time the window is scrolled ... */
//    $(window).scroll( function(){
//    
//        /* Check the location of each desired element */
//        $('.hideme').each( function(i){
//            
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//            
//            /* If the object is completely visible in the window, fade it it */
//            if( bottom_of_window > bottom_of_object ){
//                
//                $(this).animate({'opacity':'1'},500);
//                    
//            }
//            
//        }); 
//    
//    });
//    
//});