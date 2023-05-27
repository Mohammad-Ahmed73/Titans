// Heading Sticky Top Jquery
jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 0) {
        jQuery(".slide-section").addClass("active");
    } else {
        jQuery(".slide-section").removeClass("active");
    }
});

// Audio Play / Pause And Ended Jquery
jQuery('.titan-box-main').on('click', function () {
    if (jQuery(this).hasClass('active')) {
        jQuery(this).find('audio').trigger('pause');
        jQuery(this).removeClass('active');
    } else {
        jQuery(this).find('audio').trigger('play');
        jQuery(this).addClass('active');
    }
});

jQuery(".titan-box-main audio").bind("ended", function () {
    if (jQuery(this).parents(".titan-box-main").hasClass('active')) {
        jQuery(this).parents(".titan-box-main").removeClass('active');
    }
});

if (window.matchMedia('(min-width: 992px)').matches)
{
    // View Height Scroll Jquery
    function slide() {
        h = document.documentElement.clientHeight
        jQuery("section").css('min-height', h);
    };

    jQuery(window).resize(slide);
    jQuery(document).ready(slide);


    jQuery(document).bind('mousewheel DOMMouseScroll', function (event) {
        scroll(event);
    });

    var num = 1;
    var scrolling = false;

    function scroll(event) {
        event.preventDefault();
        if (!scrolling) {
            scrolling = true;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                num--;
                num = num < 1 ? 1 : num;
            } else {
                num++;
                num = num > 2 ? 2 : num;
            }

            jQuery('html, body').animate({
                scrollTop: jQuery(".section" + num).offset().top
            }, 1000, "linear", function () {
                scrolling = false;
            });
        }
    }
}