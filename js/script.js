/**
 * @function      Include
 * @description   Includes an external scripts to the page
 * @param         {string} scriptUrl
 */
function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}


/**
 * @function      isIE
 * @description   checks if browser is an IE
 * @returns       {number} IE Version
 */
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};


/**
 * @module       Copyright
 * @description  Evaluates the copyright year
 */
;
(function ($) {
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/**
 * @module       IE Fall&Polyfill
 * @description  Adds some loosing functionality to old IE browsers
 */
;
(function ($) {
    if (isIE() && isIE() < 11) {
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }

    if (isIE() && isIE() < 10) {
        $('html').addClass('lt-ie10');
    }
})(jQuery);


/**
 * @module       WOW Animation
 * @description  Enables scroll animation on the page
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        $(document).ready(function () {
            new WOW().init();
        });
    }
})(jQuery);


/**
 * @module       ToTop
 * @description  Enables ToTop Plugin
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'ui-to-top fa fa-angle-up'
            });
        });
    }
})(jQuery);

/**
 * @module       Responsive Tabs
 * @description  Enables Easy Responsive Tabs Plugin
 */
;
(function ($) {
    var o = $('.responsive-tabs');
    if (o.length > 0) {
        $(document).ready(function () {
            o.each(function () {
                var $this = $(this);
                $this.easyResponsiveTabs({
                    type: $this.attr("data-type") === "accordion" ? "accordion" : "default"
                });
            })
        });
    }
})(jQuery);

/**
 * @module       RD Mailform
 * @description  Enables RD Mailform Plugin
 */
;
(function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        $(document).ready(function () {
            var o = $('.rd-mailform');

            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Please use letters only!'
                            },
                            '@NumbersOnly': {
                                message: 'Please use numbers only!'
                            },
                            '@NotEmpty': {
                                message: 'Field should not be empty!'
                            },
                            '@Email': {
                                message: 'Enter valid e-mail address!'
                            },
                            '@Phone': {
                                message: 'Enter valid phone number!'
                            },
                            '@Date': {
                                message: 'Use MM/DD/YYYY format!'
                            },
                            '@SelectRequired': {
                                message: 'Please choose an option!'
                            }
                        }
                    }
                }, {
                    'MF000': 'Sent',
                    'MF001': 'Recipients are not set!',
                    'MF002': 'Form will not work locally!',
                    'MF003': 'Please, define email field in your form!',
                    'MF004': 'Please, define type of your form!',
                    'MF254': 'Something went wrong with PHPMailer!',
                    'MF255': 'There was an error submitting the form!'
                });
            }
        });
    }
})(jQuery);

/**
 * @module       RD Google Map
 * @description  Enables RD Google Map Plugin
 */
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#afafaf"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"saturation":"25"},{"lightness":"46"},{"gamma":"1.26"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#b6edb6"},{"weight":"0.33"},{"lightness":"16"},{"saturation":"-17"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#ede4e4"},{"saturation":"-63"},{"gamma":"0.38"},{"lightness":"61"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#f4b4b4"},{"saturation":"-16"},{"lightness":"20"}]},{"featureType":"poi.medical","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#fbc99b"},{"lightness":"12"},{"gamma":"2.39"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#fdcb9b"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f2af67"},{"lightness":"47"},{"saturation":"64"},{"gamma":"0.95"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"saturation":"-18"},{"lightness":"61"},{"gamma":"7.93"},{"weight":"0.30"},{"color":"#db8828"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":"0.79"},{"gamma":"3.19"},{"lightness":"-73"},{"saturation":"-76"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"invert_lightness":true},{"weight":"2.90"},{"color":"#786e6e"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#5da554"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7fd4ef"},{"saturation":"13"},{"lightness":"-3"},{"gamma":"1.13"},{"weight":"0.30"}]}]
                });
            }
        });
    }
})
(jQuery);

/**
 * @module       RD Navbar
 * @description  Enables RD Navbar Plugin
 */
;
(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function () {
            o.RDNavbar({
                responsive: {
                    0: {
                        layout: 'rd-navbar-fixed',
                        focusOnHover: false,
                        domAppend: true,
                    },
                    768: {
                        layout: 'rd-navbar-fixed',
                        focusOnHover: false,
                        domAppend: true,
                    },
                    1550: {
                        layout: o.attr("data-rd-navbar-lg").split(" ")[0],
                        focusOnHover: false,
                        domAppend: true,
                    }
                }
            });
        });
    }
})(jQuery);




/**
 * @module       Owl Carousel
 * @description  Enables Owl Carousel Plugin
 */
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length) {
        // include('js/jquery.owl-carousel.js');

        var isTouch = "ontouchstart" in window;

        function preventScroll(e) {
            e.preventDefault();
        }

        $(document).ready(function () {
            o.each(function () {
                var c = $(this),
                    responsive = {};

                var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-"],
                    values = [0, 480, 768, 992, 1200],
                    i, j;

                for (i = 0; i < values.length; i++) {
                    responsive[values[i]] = {};
                    for (j = i; j >= -1; j--) {
                        if (!responsive[values[i]]["items"] && c.attr("data" + aliaces[j] + "items")) {
                            responsive[values[i]]["items"] = j < 0 ? 1 : parseInt(c.attr("data" + aliaces[j] + "items"));
                        }
                        if (!responsive[values[i]]["stagePadding"] && responsive[values[i]]["stagePadding"] !== 0 && c.attr("data" + aliaces[j] + "stage-padding")) {
                            responsive[values[i]]["stagePadding"] = j < 0 ? 0 : parseInt(c.attr("data" + aliaces[j] + "stage-padding"));
                        }
                        if (!responsive[values[i]]["margin"] && responsive[values[i]]["margin"] !== 0 && c.attr("data" + aliaces[j] + "margin")) {
                            responsive[values[i]]["margin"] = j < 0 ? 30 : parseInt(c.attr("data" + aliaces[j] + "margin"));
                        }
                    }
                }

                c.owlCarousel({
                    autoplay: c.attr("data-autoplay") === "true",
                    loop: c.attr("data-loop") !== "false",
                    nav: c.attr("data-nav") === "true",
                    dots: c.attr("data-dots") === "true",
                    dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false,
                    responsive: responsive,
                    navText: [],
                    onInitialized: function () {
                        if ($.fn.magnificPopup) {
                            var o = this.$element.find('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
                                g = this.$element.find('[data-lightbox^="gallery"]');

                            if (o.length) {
                                o.each(function () {
                                    var $this = $(this);
                                    $this.magnificPopup({
                                        type: $this.attr("data-lightbox"),
                                        callbacks: {
                                            open: function () {
                                                if (isTouch) {
                                                    $(document).on("touchmove", preventScroll);
                                                    $(document).swipe({
                                                        swipeDown: function () {
                                                            $.magnificPopup.close();
                                                        }
                                                    });
                                                }
                                            },
                                            close: function () {
                                                if (isTouch) {
                                                    $(document).off("touchmove", preventScroll);
                                                    $(document).swipe("destroy");
                                                }
                                            }
                                        }
                                    });
                                })
                            }

                            if (g.length) {
                                g.each(function () {
                                    var $gallery = $(this);
                                    $gallery
                                        .find('[data-lightbox]').each(function () {
                                            var $item = $(this);
                                            $item.addClass("mfp-" + $item.attr("data-lightbox"));
                                        })
                                        .end()
                                        .magnificPopup({
                                            delegate: '[data-lightbox]',
                                            type: "image",
                                            gallery: {
                                                enabled: true
                                            },
                                            callbacks: {
                                                open: function () {
                                                    if (isTouch) {
                                                        $(document).on("touchmove", preventScroll);
                                                        $(document).swipe({
                                                            swipeDown: function () {
                                                                $.magnificPopup.close();
                                                            }
                                                        });
                                                    }
                                                },
                                                close: function () {
                                                    if (isTouch) {
                                                        $(document).off("touchmove", preventScroll);
                                                        $(document).swipe("destroy");
                                                    }
                                                }
                                            }
                                        });
                                })
                            }
                        }
                    }
                });
            });
        });
    }
})(jQuery);






/**
 * @module       RD Parallax 3
 * @description  Enables RD Parallax 3 Plugin
 */
;
(function ($) {
    var o = $('.rd-parallax');
    if (o.length) {
        $(document).ready(function () {
            o.each(function () {
                if (!$(this).parents(".swiper-slider").length) {
                    $.RDParallax();
                }
            });
        });
    }
})(jQuery);
