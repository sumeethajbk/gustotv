jQuery(document).ready(function () {

  /* Fixed Header */
  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 2) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });


  /* Menu */

  if (jQuery(window).width() <= 1023) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
    });

    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function(event){
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).next('ul.sub-menu').slideToggle();
      jQuery(this).parent().siblings().toggleClass('sib');
  });
  jQuery("ul.main_menu ul > li.menu-item-has-children > a").on("click", function(event){
      event.preventDefault();
      jQuery('ul.main_menu ul > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).siblings('ul.main_menu ul > li > ul.sub-menu').slideToggle();
  });
  
  }




/* Accorrdion */
jQuery(".accordion-item .accordion-heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
});


  jQuery('select').selectBox({
    keepInViewport: false,
    menuSpeed: 'slow',
    mobile: true,
  });


  /* Bottom Video Slide*/
  jQuery('.video-thumbnail .play-btn').on('click', function (e) {
    e.preventDefault();
    jQuery('body').addClass('pull_bottom');
    jQuery('.overlay_main_sec').addClass('active');
  });
  jQuery('.pop_connect_close').on('click', function () {
    jQuery('body').removeClass('pull_bottom');
    jQuery('.overlay_main_sec').removeClass('active');
  });

if (jQuery(window).width() >= 1023) {
  jQuery('.search-btn').on('click', function () {
    jQuery(this).toggleClass('active');
    jQuery('.navigation.mobile_menu').toggleClass('search-open');
    jQuery('.search_form').animate({
      opacity: 'toggle',
      width: 'toggle',
    }, 400);
  });
}

  if(jQuery(window).width()<=719){
jQuery(".links-list span").on("click", function(event){
  event.preventDefault();
  jQuery(this).parent().siblings().find("span.h4").removeClass("active");
  jQuery(this).toggleClass("active");
  jQuery(this).parent().siblings().find(".links-mobile-wrap").slideUp();
  jQuery(this).next(".links-mobile-wrap").slideToggle();
});
  }

});
