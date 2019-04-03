


const menuImg = document.getElementById("menu-img");
const ulJs = document.getElementById("ul-js");
const mainShowcase = document.getElementById("main-showcase");
const navAStyle = document.getElementsByTagName("li");


    //toggles mobile menu when tapping menu icon
   menuImg.onclick = () => {

        ulJs.classList.toggle("hidden");
    }

    // hides mobile menu when taping outside menu
    mainShowcase.onclick = () => {
        
        ulJs.classList.add("hidden");
    }


    $(function(){ //Jquery starts

        // hides mobile menu when tapping a link
        $('.nav-a-style').click(function() {
            ulJs.classList.add("hidden");
          });
        
    }); //JQYERY ENDS






// JQUERY
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


    // hides mobile menu when tapping a link
    $('.nav-a-style').click(function() {
        ulJs.classList.add("hidden");
      });
    
}); //JQYERY ENDS