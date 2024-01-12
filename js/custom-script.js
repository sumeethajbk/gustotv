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

    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).next('ul.sub-menu').slideToggle();
      jQuery(this).parent().siblings().toggleClass('sib');
    });
    jQuery("ul.main_menu ul > li.menu-item-has-children > a").on("click", function (event) {
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
  jQuery('#request_popup').on('click', function (e) {
    e.preventDefault();
    jQuery('body').addClass('pull_bottom');
    jQuery('.overlay_main_sec').addClass('active');
  });
  jQuery('.pop_close').on('click', function () {
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

  if (jQuery(window).width() <= 719) {
    jQuery(".links-list span").on("click", function (event) {
      event.preventDefault();
      jQuery(this).parent().siblings().find("span.h4").removeClass("active");
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find(".links-mobile-wrap").slideUp();
      jQuery(this).next(".links-mobile-wrap").slideToggle();
    });
  }


  jQuery('.frm_form_field input, .frm_form_field textarea').on('input', function () {
    var inputLength = jQuery(this).val().length;
    if (inputLength > 0) {
      jQuery(this).addClass('input-has-value');
    } else {
      jQuery(this).removeClass('input-has-value');
    }
  });
  jQuery('.frm_form_field input, .frm_form_field textarea').on('blur', function () {
    var inputValue = jQuery(this).val();
    if (inputValue) {
      jQuery(this).addClass('highlight');
    } else {
      jQuery(this).removeClass('highlight');
    }
  });

  /* Fixed Section on Scroll */

    
  if (jQuery(window).width() >= 1200) {
    var element = jQuery('.fixme'),
      originalY = element.offset().top;
    var topMargin = 0;
    element.css('position', 'relative');

    jQuery(window).on('scroll', function (event) {
      var scrollTop = jQuery(window).scrollTop();
      element.stop(false, false).animate({
        top: scrollTop < originalY
          ? 0
          : scrollTop - originalY + topMargin
      }, 0);
    });
}
    

});
