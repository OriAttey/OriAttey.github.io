(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function(){
      $(this).scrollTop(0);
    });

    // disable the landing page animations to wait for the loading screen
    $("#home #mainNav").addClass('disable');
    $("#home #landingPageTitle").addClass('disable');
    $("#home #landingPageButton").addClass('disable');
    $("#home #arrows").addClass('disable');

    $(window).on('load', function() {
      $("#arrows").hide();
      setTimeout(function(){        
        $('body').addClass('loaded');
        
        setTimeout(function(){
          $("#home nav").removeClass('disable');
          $("#home #landingPageTitle").removeClass('disable');
          $("#home #landingPageButton").removeClass('disable');
          $("#home #arrows").removeClass('disable');

          // Show the div after 5s
          $("#arrows").delay(3000).fadeIn(500); 
        }, 1000);
      }, 2000);
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    $('.navbar-brand').click(function() {
      document.getElementById("arrows").style.display="block";
      var target = $("#home");
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
    });

    $('.arrow').click(function() {
      $("#arrows").fadeOut();
      var target = $("#about");
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
    });
    
    $(window).scroll(function() {
      var target = $("#about");
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $("#arrows").fadeOut();
          return false;
        }
    }); 

    // If scrolled, change nav color to
    $(window).scroll(function() {
      $('nav').toggleClass('scrolled', $(this).scrollTop()>100);
    });
  
    
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
  
  })(jQuery); // End of use strict