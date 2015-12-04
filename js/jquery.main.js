$(function(){

    $('.menu__btn').on({
        'click':function(){
            var curElem = $(this).parent();

            if (curElem.hasClass('active')) {
                curElem.removeClass('active');
            } else {
                curElem.addClass('active');
            }

        }
    });

    $(window).on({
        'load':function(){
            if($(window).width() >= 1006){
                $('.menu__aside').clone().appendTo(".site__aside");
                $('.menu__aside').addClass('aside__layout');
                $('.menu__aside').removeClass('menu__aside');
            }
        },
        'resize':function(){
            if($(window).width() >= 1006){
                $('.aside__layout').clone().appendTo(".site__aside");
            }
        }
    });

} );