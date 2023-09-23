
/*=================================================================
             UTRUST JS - All Rights Reserved.
==================================================================*/

// top
var $ = jQuery.noConflict();
jQuery(document).ready(function( $ ){
    scrollToTop.init( );
});

var scrollToTop =
{
    /**
     * When the user has scrolled more than 100 pixels then we display the scroll to top button using the fadeIn function
     * If the scroll position is less than 100 then hide the scroll up button
     *
     * On the click event of the scroll to top button scroll the window to the top
     */
    init: function(  ){

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.ToHome').fadeIn();
            } else {
                $('.ToHome').fadeOut();
            }
        });

        // Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }
};

// device
var classNames = [];
  if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
  if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

  var html = document.getElementsByTagName('html')[0];

  if (classNames.length) classNames.push('on-device');

// navbar-affix
// var affixElement = '.header';
// $(affixElement).affix({
//   offset: {
//     // Distance of between element and top page
//     top: function () {
//       return (this.top = $(affixElement).offset().top)
//     },
//     // when start #footer
//     bottom: function () {
//       return (this.bottom = $('.footer').outerHeight(true))
//     }
//   }
// });

// nav-main
// $('#navbar').affix({
//   offset: {
//     top: 100,
//     bottom: function () {
//       return (this.bottom = $('.footer').outerHeight(true))
//     }
//   }
// })

//Swiper
if ( $('.banner-wrap').length ){
    var swiper = new Swiper('.banner.swiper-container', {
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
}

//Swiper
if ( $('.slider2').length ){
    var swiper = new Swiper('.banner-slider2', {
        // paginationClickable: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

}

// Slider
if ( $('.inner-imgslider').length )
{
    var swiper = new Swiper('.inner-imgslider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // preventClicks: false,
        // preventClicksPropagation: false,
        // slidesPerView: 1,
        // paginationClickable: true,
        // spaceBetween: 0,
        // loop: false
    });
};

// nav-sub - sidebar
// $('#navbar').affix({offset:{top:200,bottom:800}});
$('#sidebar').affix({offset:{top:200,bottom:300}});
$('#btnSub').affix({offset:{top:180,bottom:300}});
$(".sidebar-offcanvas").height($("#sidebar").height());

// offcanvas
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});



// sidebar list-group
if ( $('.sub-nav').length ){
  $(".list-group").navgoco({accordion: true});
}


// btn-mfp
// if ( $('.btn-mfp').length ){
//   $('.btn-mfp').magnificPopup({
//     type: 'ajax',

//     fixedContentPos: false,
//     fixedBgPos: true,

//     overflowY: 'auto',

//     closeBtnInside: true,
//     closeOnBgClick: false ,
//     preloader: false,

//     midClick: true,
//     removalDelay: 300,
//     mainClass: 'my-mfp-zoom-in'
//   });
// }

//youtube popup
if ( $('.popup-youtube').length ){
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
   });
}


//playicon
    $('.video .mainList').hover(function(){
        $(this).find('.playicon').addClass('iconHover')
    },function(){
         $(this).find('.playicon').removeClass('iconHover')
    })

    $('.thumbnail').hover(function(){
        $(this).find('.playicon').addClass('iconHover')
    },function(){
         $(this).find('.playicon').removeClass('iconHover')
    })



//collapse
$(function() {
     $(".ct").hide();
     $(".code > h2").click(function() {
      $(this)
          .parent()
          .find(".ct")
          .slideToggle();
     });
});


// scroll-down
if ( $('.anchor').length ) {
    jQuery(document).ready(function($){
        var scrolling = false;
            scrollArrow = $('.scroll-down');

        $(window).on('scroll', checkScroll);

        //smooth scroll to the second section
        scrollArrow.on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        function checkScroll() {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
            }
        }

        function smoothScroll(target) {
            $('body,html').animate({'scrollTop':target.offset().top},
                1000, 'easeInOutExpo'
            );
        }
    });
}

