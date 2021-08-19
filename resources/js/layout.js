AOS.init({
    duration: 1200,

});
 
//owl
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//for mobile nav
var c = 0;
$('.mobile-nav-toggle').click(function(){
    if(c == 0){
        $('.mobile-nav').css('opacity', 1);
        $('.mobile-nav').css('visibility','visible');
        $('.mobile-nav-overly').css('display','block');
        $('.icofont-navigation-menu').addClass('icofont-close');
        $('.icofont-close').removeClass('icofont-navigation-menu');
        c++;
    }else if(c==1){
        $('.mobile-nav').css('opacity', 0);
        $('.mobile-nav').css('visibility','hidden');
        $('.icofont-close').addClass('icofont-navigation-menu');
        $('.mobile-nav-overly').css('display','none');
        $('.icofont-navigation-menu').removeClass('icofont-close');
        c--;
    }
});

$(window).scroll(function() {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
    $('.back-to-top-btn').toggleClass('show', $(this).scrollTop() > 100);
});

$('.back-to-top-btn').click(function(){
    $("html, body").animate({
        scrollTop: $(window).scrollTop() - 400
    },1000);
    $("html, body").animate({
        scrollTop: 0
    },2000);
});
//for canvas
