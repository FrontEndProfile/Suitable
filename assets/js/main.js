// !=== HEADER SCROLL ADD SHADOW ====
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#sticky').addClass('header_active');
    } else {
       $('#sticky').removeClass('header_active');
    }
});
