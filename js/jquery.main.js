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

    $.each( $('.casino-review__rating-wrap'), function(){
        new Rating( $(this) );
    } );


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
            if($(window).width() >= 900){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
            }
        },
        'resize':function(){
            if($(window).width() >= 900){
                $('.menu-to-aside').clone().appendTo(".site__aside");
                $('.menu-to-aside').addClass('aside__layout');
                $('.menu-to-aside').removeClass('menu-to-aside');
            }
        }
    });

} );

var Rating = function (obj) {

    var _obj = obj,
        _itemRate = _obj.find('.casino-review__rating div'),
        _hiddenInput = _obj.find('input[type="hidden"]');

    var _addEvents = function () {

            _itemRate.on({
                'click': function(){
                    var curItem = $(this),
                        dataRate = curItem.attr('data-rate'),
                        prevElems = curItem.prevAll('div');

                    _itemRate.removeClass('active');
                    prevElems.addClass('active');
                    curItem.addClass('active');
                    _hiddenInput.val(dataRate);
                    _addClassObj();
                }
            });

        },
        _addClassObj = function(){
            if(_hiddenInput.val()<=2){
                _obj.addClass('grey_rating');
                _obj.removeClass('blue_rating');
                _obj.removeClass('red_rating');
            }else if (_hiddenInput.val()>2&& _hiddenInput.val()<=6){
                _obj.addClass('blue_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('red_rating');
            }
            else if (_hiddenInput.val()>6&& _hiddenInput.val()<=10){
                _obj.addClass('red_rating');
                _obj.removeClass('grey_rating');
                _obj.removeClass('blue_rating');
            }
        },
        _init = function () {
            _addEvents();
        };

    _init();
};