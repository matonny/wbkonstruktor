$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        var id = this.hash.slice(1);
        target = target.length ? target : $('[name=' + id + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                location.hash = id;
            });
            return false;
        }
    }
});

var $openMenuButton = $('.js-open-menu');
var $navigationLinks = $('.header__nav a');

function openMenu() {
    $openMenuButton.attr('aria-expanded', 'true');
}

function closeMenu() {
    $openMenuButton.attr('aria-expanded', 'false');
}

$openMenuButton.click(function () {
    if ($openMenuButton.attr('aria-expanded') === 'true') {
        closeMenu();
    } else {
        openMenu();
    }
});

$navigationLinks.click(closeMenu);

function initMap() {
        var uluru = {lat: 54.405455, lng: 18.642956};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }