(function($) {
    "use strict";
    $(document).ready(function() {

        function responsive_menu() {
            function universalMenu() {
            var $burger_menu = $('.burger_universal_menu_overlay_normal');
                $burger_menu.find('.menu-item-has-children > a').on('click', function (e) {
                    var $this = $(this),
                        $current_menu_item = $(this).parent();
                    $burger_menu.find('.menu-item-has-children').each(function () {
                        if (!$.contains(this, $current_menu_item.get(0))) {
                            $(this).find('> a').removeClass('sub-active').next('ul').slideUp(250);
                        }
                    });
                    if ($this.next('ul').is(':visible') === false) {
                        $this.addClass('sub-active').next('ul').slideDown(250);
                    }
                    e.preventDefault();
                });
            }

            universalMenu();
            function universal_burger_responsive() {
                $('#open-button').click(function(e) {
                    e.preventDefault();
                    $(this).toggleClass('active');
                    $('body').toggleClass('show-menu');
                });
            }
            universal_burger_responsive();
            $('.burger_universal_menu_overlay_normal .share-class a').on('click', function(){$('#open-button').trigger('click')});
        };
        $(window).on('load', responsive_menu);

            });
})(jQuery);

