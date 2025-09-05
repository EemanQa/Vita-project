$(document).ready(function() {

    // -----------------------------
    // Collapse all mobile submenus by default
    // -----------------------------
    $('#mobile-menu ul ul, #mobileNav ul ul').hide();

    // -----------------------------
    // Desktop dropdown hover
    // -----------------------------
    if (window.innerWidth >= 1024) { // only on desktop
        $('.group').hover(
            function() {
                $(this).find('.dropdown-menu-custom').stop(true, true).slideDown(200);
            },
            function() {
                $(this).find('.dropdown-menu-custom').stop(true, true).slideUp(200);
            }
        );
    }

    // -----------------------------
    // Mobile hamburger toggle
    // -----------------------------
    $('#mobile-menu-button, #mobileMenuBtn').on('click', function() {
        const menuId = $(this).attr('id') === 'mobile-menu-button' ? '#mobile-menu' : '#mobileNav';
        $(menuId).slideToggle(200);
    });

    // -----------------------------
    // Mobile submenu toggle (+/– works properly)
    // -----------------------------
    $('.submenu-toggle').on('click', function() {
        const submenu = $(this).next('ul');
        const icon = $(this).find('.icon');

        submenu.slideToggle(200, () => {
            icon.text(submenu.is(':visible') ? '–' : '+');
        });
    });

    // -----------------------------
    // Navbar scroll effect
    // -----------------------------
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#main-header').addClass('scrolled');
        } else {
            $('#main-header').removeClass('scrolled');
        }
    });

    $(window).trigger('scroll'); // handle reload mid-page

    // -----------------------------
    // Highlight active menu items
    // -----------------------------
    const currentPath = window.location.pathname.split("/").pop();

   // Desktop dropdown links
$('.dropdown-menu-custom li a').each(function() {
    const linkPath = $(this).attr('href').split("/").pop();
    if (linkPath === currentPath) {
        $(this).addClass('active'); // highlight link
        // $(this).closest('ul').show(); // REMOVE this line
        $(this).closest('.group').children('a').addClass('active-page'); // highlight parent
    }
});


    // Mobile submenu links
    $('#mobile-menu ul li a, #mobileNav ul li a').each(function() {
        const linkPath = $(this).attr('href').split("/").pop();
        if (linkPath === currentPath) {
            $(this).addClass('active text-blue-custom font-semibold'); // highlight in blue
            // highlight the parent toggle but don't force submenu open
            $(this).closest('ul').prev('.submenu-toggle').addClass('active-page');
        }
    });

});
