$(function()
{
    // Stretch homepage image.
    $("#header").backstretch("/img/header.jpg");
    $("#contact").backstretch("/img/header.jpg", { alignY: 'bottom' });

    /**
     * Smooth scroll to anchor.
     *
     * @source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});