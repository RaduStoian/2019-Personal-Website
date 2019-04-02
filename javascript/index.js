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




 
    });

