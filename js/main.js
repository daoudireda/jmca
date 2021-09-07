(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #mainmenu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: true,
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* testimonials Slider Active
    =============================*/
    $('.carousel-inner').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        arrows:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right" ></i>'],
        items: 1
    });
    /* testimonials Slider Active
    =============================*/
    $('.screen-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        center: true,
    });
    /* testimonials Slider Active
    =============================*/
    $('.clients').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions 
    magnifPopup();

    //Background Parallax
    $('.header-area').parallax("50%", -0.4);
    $('.price-area').parallax("50%", -0.5);
    $('.testimonial-area').parallax("10%", -0.2);


    $('#accordion .panel-title a').prepend('<span></span>');






    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('.caption-slider'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });





    // Select all links with hashes
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });






    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });
})(jQuery);

/* slider
==================*/
/*$(document).ready(function(){
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover:false,
                responsive: [{
                    breakpoint: 768,
                    setting: {
                        slidesToShow:4
                    }
                }, {
                    breakpoint: 520,
                    setting: {
                        slidesToShow: 3
                    }
                }]
            });
        });*/




/*$(document).ready(function(){
            $('.actualites_slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover:false,
                responsive: [{
                    breakpoint: 768,
                    setting: {
                        slidesToShow:4
                    }
                }, {
                    breakpoint: 520,
                    setting: {
                        slidesToShow: 1
                    }
                }]
            });
        });*/

$('.actualites_slider').owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        800:{
            items:3,
            nav: false
        },
        1000:{
            items:4,
            nav: false
        }
    }
});

$('.customer-logos').owlCarousel({

    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        800:{
            items:3,
            nav: false
        },
        1000:{
            items:5,
            nav: false
        },
        1600:{
            items:6,
            nav: false
        }
    }
});
$('.equipe').owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        800:{
            items:3,
            nav: false
        },
        1000:{
            items:5,
            nav: false
        }
    }
});
/*$(document).ready(function(){
            $('.actualites_slider_max').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover:false,
                responsive: [{
                    breakpoint: 768,
                    setting: {
                        slidesToShow:4
                    }
                }, {
                    breakpoint: 520,
                    setting: {
                        slidesToShow: 3
                    }
                }]
            });
        });*/

    /*animation 
    ====================*/

    

  


/* $('.wrapper').fadeIn(3000);*/
/*$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".wrapper").each(function() {
      /* Check the location of each desired element 
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
       If the element is completely within bounds of the window, fade it in 
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});*/



 
/* page devis --- show and hide*/
    $(".Toggleable").hide();
    $(".Infos").hide();

$("#site_vitrine").click(function(){

    $(".Toggleable").hide();
    $(".SiteVitrine").show();
    $(".Infos").show();

    
});

$("#site_marchand").click(function(){

   $(".Toggleable").hide();
    $(".SiteMarchand").show();
    $(".Infos").show();
    
});

$("#application_mobile").click(function(){

    $(".Toggleable").hide();
    $(".Appli").show();
    $(".Infos").show();

    
});

$("#projet_referencement").click(function(){

    $(".Toggleable").hide();
    $(".Ref").show();
    $(".Infos").show();

    
});

$("#autre").click(function(){

    $(".Toggleable").hide();
    $(".Autre").show();
    $(".Infos").show();

    
});


$("#DesignOui").click(function(){

    $("#DesignSpecification").show();

});
$("#DesignNon").click(function(){

    $("#DesignSpecification").hide();
    
});

$("#RefOui").click(function(){

    $("#RefSpecification").show();

});
$("#RefNon").click(function(){

    $("#RefSpecification").hide();
    
});

$("#RefOuiPlus").click(function(){

    $("#RefSpecificationPlus").show();

});
$("#RefNonPlus").click(function(){

    $("#RefSpecificationPlus").hide();
    
});



/*
$("#boxchecked").click(function(){

    $("#hidden").show();

    
});
$("#nochecked").click(function(){

    $("#hidden").hide();

    
});
$("#boxchecked1").click(function(){

    $("#hidden1").show();

    
});
$("#nochecked1").click(function(){

    $("#hidden1").hide();

    
});
$("#boxchecked2").click(function(){

    $("#hidden2").show();

    
});
$("#nochecked2").click(function(){

    $("#hidden2").hide();

    
});
$("#boxchecked3").click(function(){

    $("#hidden3").show();

    
});
$("#nochecked3").click(function(){

    $("#hidden3").hide();

    
});
$("#site_vitrine").click(function(){

    $(".SV").toggle();
    $(".SM").hide();
    $(".AM").hide();
    $(".PR").hide();
    $(".A").hide();
    
});

$("#site_marchand").click(function(){

    $(".SV").hide();
    $(".AM").hide();
    $(".PR").hide();
    $(".A").hide();
    $(".SM").toggle();

    
});

$("#application_mobile").click(function(){

    $(".SV").hide();
    $(".SM").hide();
    $(".PR").hide();
    $(".A").hide();
    $(".AM").toggle();

    
});

$("#projet_referencement").click(function(){

    $(".SV").hide();
    $(".SM").hide();
    $(".AM").hide();
    $(".A").hide();
    $(".PR").toggle();

    
});

$("#autre").click(function(){

    $(".SV").hide();
    $(".SM").hide();
    $(".AM").hide();
    $(".PR").hide();
    $(".A").toggle();

    
});

*/

/*recupere les donnees par JSON*/
var devis =
{ ".SV": [ {
    "MiseEnAvant": null, 
    "types": null, 
    "charte": null,
    "design":null,
    "attentes":null,
    "références":null,
    "prestation":null,
    "structure":null,
    "structure1":null,
    "deadlines":null,
    "nous":null
     
}] ,
".SM": [ { 
      "typeProduit": null, 
      "Lieux": null, 
      "ref": null, 
      "livraison": null, 
      "facturation": null, 
      "modePaiement": null, 
      "charte": null, 
      "design": null, 
      "attentesDesign": null, 
      "reference": null, 
      "prestation": null, 
      "structure": null, 
      "structure1": null, 
      "structure1": null, 
      "structure1": null, 
  }],
".AM": [ { 
    "objet": null,  
    "plateforme": null, 
     "module": null,
     "systeme": null,
     "fonctionnalités": null,
     "charte": null,
     "design": null,
     "attentes": null,
     "reference": null,
     "structure": null,
     "structure1": null,
     "projet": null,
     "nous": null 
     }],
".PR": [ {
    "reférencement": null,
    "reférencementMiseEnPlace": null,
    "outils": null,
    "structure": null,
    "structure1": null,
    "projet": null,
    "nous": null
}],
".A": [ { 
    "votreProjet": null,
    "structure": null, 
    "structure1": null, 
    "projet": null, 
    "nous": null
   }],

"#InfosClient": [ { 
    "nom": null, 
    "prenom": null, 
    "mail": null, 
    "tel": null, 
    "entreprise": null,
    "pays": null,
    "adresse": null

  }],
};

    // console.log(JSON.stringify(devis));

$("#EnvoyerBut").click(function(){

Devis = [];

    $(".DevisInput").each(function(){
        item = {};
        if ($(this).attr("type") == "radio" && $(this).is(":checked")){
           // console.log("radio button "+$(this).attr("name")+" = "+$(this).val());
            item [$(this).attr("name")] = $(this).val();
            Devis.push(item);
        }
        else if ($(this).attr("type") == "checkbox" && $(this).is(":checked")){
            //console.log("radio button "+$(this).attr("name")+" = "+$(this).val());
            item [$(this).attr("name")] = $(this).val();
            Devis.push(item);
        }
        else if ($(this).is("textarea") && $(this).val()){
          // console.log($(this).attr("name")+" = "+$(this).val());
           item [$(this).attr("name")] = $(this).val();
           Devis.push(item);
        }
        else if ($(this).is("select") && $(this).val()){
          // console.log($(this).attr("name")+" = "+$(this).val());
           item [$(this).attr("name")] = $(this).val();
           Devis.push(item);
        }
        else if ($(this).is(".perso") && $(this).val()){
          // console.log($(this).attr("name")+" = "+$(this).val());
           item [$(this).attr("name")] = $(this).val();
           Devis.push(item);
        }


    });
    
    console.log(Devis);

});



/*/*/

       