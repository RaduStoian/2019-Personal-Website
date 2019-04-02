

$(function(){


    // Getting the height of the showcase in the global context (for use later)
         var showcaseHeight = $("#main-showcase").height();

        /* Scrolling down the page upon clicking the a inside showcase */
        $('#showcase-event-text').click(function(event) {
            // Preventing default action of the event
            event.preventDefault();
            $('html, body').animate({ scrollTop: showcaseHeight+10 }, 550);
        //                                       |    |
        //                                       |    --- duration (milliseconds) 
        //                                       ---- distance from the top
    });




    // Mobile - display nav when clicking the menu icon
    $('.menu-img-style').click(function(event) {

        if ( $(".ul-style").css('display', 'none')) {

            $(".ul-style").css('display', 'block')
        } 

        else if ( $(".ul-style").css('display', 'block')) {

            $(".ul-style").css('display', 'none')
        } 
    });

    //Mobile - hide nav when clicking a nav li
    $('.nav-a-style').click (function(event) {
        
        if ( $(".ul-style").css('display', 'block')) {

            $(".ul-style").css('display', 'none')
        } 
    });


    
});