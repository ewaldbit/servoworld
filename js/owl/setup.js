$('.owl-carousel').owlCarousel({
    items:5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})