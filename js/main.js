$(document).ready(function () {
    $('.menu a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800)
        $('nav a[href^="#"]').removeClass('active');
        $(this).addClass('active');
        return false;
    })
    // Модальное меню
    // $('.burger__menu').click(function () {
    //     $('.menu__mobile').toggle(500);
    // })
})