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
            var element_parent=$('.casino-bonus__game-metr'),
                element_child=element_parent.children('div'),
                element_parent_width=element_parent.width(),
                element_child_width=element_child.width();

            var element_width=(element_child_width/element_parent_width)*100;

            if (element_width<=20){
                element_child.addClass('grey');
            }
            else if (element_width>20&& element_width<=60){
                element_child.addClass('blue');
            }
            else if (element_width>40&& element_width<=100){
                element_child.addClass('red');
            }
            if($(window).width() >= 1006){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
            }
        },
        'resize':function(){
            if($(window).width() >= 1006){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
            }
        }
    });

} );